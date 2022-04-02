import { Book, BookDetail, ImageCredientials } from '@app/@shared/models';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Platform, ModalController, IonRouterOutlet } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
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
  step = 3;
  options = {
    width: 200,
    quality: 30,
    outputType: 1,
  };

  list: any;
  imageUrl: any = '';
  uploadCredentials: any;
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
      name: [''],
      image: [''],
      bookTitle: ['', [Validators.required]],
      recipientName: ['', [Validators.required]],
      recipientEmail: ['', [Validators.required]],
    });
  }

  getBookDetails() {
    this.apiService.getDetails(`/api/Books/${this.routeParams.bookId}`, BookDetail).subscribe((res) => {
      console.log(res);
      this.book = res;
      this.step1Form.setValue({
        name: this.book.bookName,
        bookTitle: this.book.title,
        image: this.book.image,
        recipientName: this.book.recipientName,
        recipientEmail: this.book.recipientEmail,
      });
    });
  }

  getFileCredentials(fileName: string) {
    console.log(this.routeParams);
    this.apiService.get(`/api/Files/credentials/${this.routeParams.bookId}?fileName?`).subscribe({
      complete: () => {},
      next: (res: any) => {
        this.uploadCredentials = res;
        console.log(this.uploadCredentials);
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }

  getImages() {
    this.imagePicker.getPictures(this.options).then(
      (results) => {
        for (var i = 0; i < results.length; i++) {
          this.imageUrl = 'data:image/jpeg;base64,' + results[i];
          Utils.dataUrlToFile('data:image/jpeg;base64,' + results[i], 'image' + Math.random() * 100).then(
            (imageData: any) => {
              console.log(imageData);
              let fileName = `image${this.routeParams.bookId}.png`;
              this.apiService
                .getDetails(
                  `/api/Files/credentials/book/${this.routeParams.bookId}?fileName=${fileName}`,
                  ImageCredientials
                )
                .subscribe({
                  complete: () => {},
                  next: (res: any) => {
                    this.uploadCredentials = res;
                    debugger;
                    // console.log(this.uploadCredentials);
                    const uploadFileObj = {
                      ...this.uploadCredentials,
                      file: imageData,
                    };
                    this.postFile(uploadFileObj);
                  },
                  error: (err: any) => {
                    console.log(err);
                  },
                });
            }
          );
        }
      },
      (err) => {}
    );
  }

  postFile(uploadFileObj: any) {
    this.apiService.postFormData(this.uploadCredentials.upload_url, uploadFileObj).subscribe({
      complete: () => {},
      next: (res: any) => {
        console.log(res);
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
    this.apiService.put(`/api/Books/${this.routeParams.bookId}`, this.step1Form.value).subscribe((res) => {
      console.log(res);
      this.step = 2;
    });
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

  removeQuestion(index: any) {}
  save() {
    this.router.navigate(['/tabs/my-library']);
    this.newBookAvailable();
  }
}
