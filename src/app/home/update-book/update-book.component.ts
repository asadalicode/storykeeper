import { Book, BookDetail, ImageCredientials } from '@app/@shared/models';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Platform, ModalController, IonRouterOutlet } from '@ionic/angular';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as _ from 'lodash';
import { AddNewQuestionComponent } from '@app/book-shared/add-new-question/add-new-question.component';
import { ConfirmationInfoComponent } from '@app/@shared/popup-components/confirmation-info/confirmation-info.component';
import { ModalDismissRole } from '@app/@shared/constants';
import { ImagePicker } from '@awesome-cordova-plugins/image-picker/ngx';
import { Utils } from '@shared/appConstants';
import { ApiService } from '@app/@shared/sevices/api.service';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.scss'],
})
export class UpdateBookComponent implements OnInit {
  step1Form!: FormGroup;
  isLoading = false;
  book!: BookDetail;
  step = 1;
  options = {
    width: 200,
    maximumImagesCount: 1,
    quality: 100,
    outputType: 1,
  };

  imageUrl: any = '';
  uploadCredentials: any;
  @ViewChild('fileInput') public fileInput!: ElementRef;
  fileReader: any = [];
  dumyImages: any = [];
  uploadFileObj: any;
  constructor(
    private platform: Platform,
    private formBuilder: FormBuilder,
    private modalController: ModalController,
    private routerOutlet: IonRouterOutlet,
    private router: Router,
    private imagePicker: ImagePicker,
    private apiService: ApiService,
    private route: ActivatedRoute
  ) {
    this.createForm();
  }

  ngOnInit(): void {
    this.getBookDetails();
    // this.getFileCredentials();
  }

  get routeParams() {
    let params: any;
    this.route.params.subscribe((res: any) => {
      params = res;
    });
    return params;
  }

  private createForm() {
    this.step1Form = this.formBuilder.group({
      name: ['', [Validators.required]],
      image: [''],
      recipientName: ['', [Validators.required]],
      recipientEmail: ['', [Validators.required]],
    });
  }

  getBookDetails() {
    this.apiService.getDetails(`/api/Books/${this.routeParams.bookId}`, BookDetail).subscribe((res) => {
      console.log(res);
      this.book = res;
      this.step1Form.setValue({
        name: this.book.title,
        image: this.book.image,
        recipientName: this.book.recipientName,
        recipientEmail: this.book.recipientEmail,
      });
    });
  }

  onFileChange(e: any) {
    var files = e.target.files;
    if (files && files.length > 0) {
      for (var i = 0; i < files.length; i++) {
        this.fileReader[i] = new FileReader();
        this.fileReader[i].readAsDataURL(files[i]);
        this.fileReader[i].onload = (e: any) => {
          this.imageUrl = e.target.result;
        };
        this.getFileCredentials(files[i]);
      }
    }
  }

  getImages() {
    this.imagePicker.getPictures(this.options).then(
      (results) => {
        for (var i = 0; i < results.length; i++) {
          this.imageUrl = 'data:image/jpeg;base64,' + results[i];
          Utils.dataUrlToFile(
            'data:image/jpeg;base64,' + results[i],
            `image${(Math.random() * 100 + 1).toFixed()}.png`
          ).then((imageData: any) => {
            this.getFileCredentials(imageData);
          });
        }
      },
      (err) => {}
    );
  }

  getFileCredentials(file: any) {
    this.apiService
      .getDetails(`/api/Files/credentials/book/${this.routeParams.bookId}?fileName=${file.name}`, ImageCredientials)
      .subscribe({
        complete: () => {},
        next: (res: any) => {
          this.uploadCredentials = res;
          this.uploadFileObj = {
            ...this.uploadCredentials,
            file: file,
          };
        },
        error: (err: any) => {
          console.log(err);
        },
      });
  }

  get fileFileObject() {
    return {
      key: this.uploadFileObj.key,
      acl: this.uploadFileObj.acl,
      success_action_status: this.uploadFileObj.success_action_status,
      policy: this.uploadFileObj.policy,
      'x-amz-algorithm': this.uploadFileObj.x_amz_algorithm,
      'x-amz-credential': this.uploadFileObj.x_amz_credential,
      'x-amz-date': this.uploadFileObj.x_amz_date,
      'x-amz-signature': this.uploadFileObj.x_amz_signature,
      'x-amz-meta-owner': this.uploadFileObj.x_amz_meta_owner,
      // is_version: this.uploadFileObj.is_version,
      file: this.uploadFileObj.file,
    };
  }

  postFile() {
    this.apiService.postFormData(this.uploadCredentials.upload_url, this.fileFileObject).subscribe({
      complete: () => {},
      next: (res: any) => {
        console.log(res);
        this.router.navigate(['/tabs/my-library']);
        this.newBookAvailable();
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }
  get isWeb(): boolean {
    return !this.platform.is('cordova');
  }

  navigateTo(url: string) {
    this.router.navigate([url]);
  }

  saveStep1() {
    this.isLoading = true;
    this.apiService.put(`/api/Books/${this.routeParams.bookId}`, this.step1Form.value).subscribe(
      (res) => {
        this.step = 2;
        this.isLoading = false;
      },
      (error) => {
        this.isLoading = false;
      }
    );
  }

  async newQustion() {
    const modal = await this.modalController.create({
      component: AddNewQuestionComponent,
      cssClass: 'modal-popup md',
      componentProps: {
        title: 'New Question',
      },
      swipeToClose: true,
      presentingElement: this.routerOutlet.nativeEl,
    });
    modal.onDidDismiss().then((data) => {
      if (data.role == ModalDismissRole.submitted) {
        debugger;
      }
    });
    return await modal.present();
  }

  async newBookAvailable() {
    const modal = await this.modalController.create({
      component: ConfirmationInfoComponent,
      cssClass: 'modal-popup sm',
      componentProps: {
        title: 'New book available',
        imageUrl: 'assets/images/about-ion.png',
        confirmbuttonText: 'Ok',
        confirmbuttonClass: 'primary',
      },
      swipeToClose: true,
      presentingElement: this.routerOutlet.nativeEl,
    });
    return await modal.present();
  }
}
