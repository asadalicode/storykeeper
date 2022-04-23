import { BookDetail } from './../../@shared/models/book';
import { Book, ImageCredientials } from '@app/@shared/models';
import { ApiService } from './../../@shared/sevices/api.service';
import { ImagePicker } from '@awesome-cordova-plugins/image-picker/ngx';
import { Router, ActivatedRoute } from '@angular/router';
import { Platform, ModalController, IonRouterOutlet } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Utils } from '@app/@shared';
import { ToastService } from '@app/@shared/sevices/toast.service';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.scss'],
})
export class EditBookComponent implements OnInit {
  uploadFileObj: any;
  fileReader: any = [];
  @Input() bookId = '';
  step1Form!: FormGroup;
  isLoading = false;
  step = 1;
  book!: BookDetail;
  @ViewChild('fileInput') public fileInput!: ElementRef;
  options = {
    width: 200,
    quality: 30,
    outputType: 1,
  };

  imageUrl: any = '';
  uploadCredentials: any;
  constructor(
    private platform: Platform,
    private formBuilder: FormBuilder,
    private modalController: ModalController,
    private router: Router,
    private imagePicker: ImagePicker,
    private apiService: ApiService,
    private route: ActivatedRoute,
    private toastService: ToastService
  ) {
    this.createForm();
  }

  ngOnInit(): void {
    // this.getFileCredentials();
    this.getBookDetails();
  }

  private createForm() {
    this.step1Form = this.formBuilder.group({
      name: ['', [Validators.required]],
      recipientName: ['', [Validators.required]],
      recipientEmail: ['', [Validators.required, Validators.email]],
      image: [''],
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

  getBookDetails() {
    this.apiService.getDetails(`/api/Books/${this.bookId}`, BookDetail).subscribe((res) => {
      this.book = res;
      this.step1Form.setValue({
        name: this.book.title,
        image: this.book.image,
        recipientName: this.book.recipientName,
        recipientEmail: this.book.recipientEmail,
      });
    });
  }

  getFileCredentials(file: any) {
    const uuid = (Math.random() * 100 + 1).toFixed();
    this.apiService
      .getDetails(`/api/Files/credentials/book/${this.bookId}?fileName=${uuid}${file.name}`, ImageCredientials)
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

  getImages() {
    this.imagePicker.getPictures(this.options).then(
      (results) => {
        for (var i = 0; i < results.length; i++) {
          this.imageUrl = 'data:image/jpeg;base64,' + results[i];
          Utils.dataUrlToFile('data:image/jpeg;base64,' + results[i], `image.png`).then((imageData: any) => {
            this.getFileCredentials(imageData);
          });
        }
      },
      (err) => {}
    );
  }

  postFile() {
    this.apiService.postFormData(this.uploadCredentials.upload_url, this.fileFileObject).subscribe({
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

  save() {
    this.isLoading = true;
    this.apiService.put(`/api/Books/${this.bookId}`, this.step1Form.value).subscribe(
      (res) => {
        this.step = 2;
        this.postFile();
        this.toastService.showToast('success', 'Book updated successfully');
        this.dismiss();
        this.isLoading = false;
      },
      (error) => {
        this.isLoading = false;
      }
    );
  }
  dismiss() {
    this.modalController.dismiss('button clicked');
  }
}
