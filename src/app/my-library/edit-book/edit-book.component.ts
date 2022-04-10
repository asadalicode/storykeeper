import { BookDetail } from './../../@shared/models/book';
import { Book } from '@app/@shared/models';
import { ApiService } from './../../@shared/sevices/api.service';
import { ImagePicker } from '@awesome-cordova-plugins/image-picker/ngx';
import { Router, ActivatedRoute } from '@angular/router';
import { Platform, ModalController, IonRouterOutlet } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';
import { Utils } from '@app/@shared';
import { ToastService } from '@app/@shared/sevices/toast.service';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.scss'],
})
export class EditBookComponent implements OnInit {
  @Input() bookId = '';
  step1Form!: FormGroup;
  isLoading = false;
  step = 1;
  book!: BookDetail;
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
  getFileCredentials() {
    console.log(this.bookId);
    // this.apiService.get(`/api/Files/credentials/${this.routeParams.bookId}`).subscribe({
    //   complete: () => {},
    //   next: (res: any) => {
    //     this.uploadCredentials = res;
    //     console.log(this.uploadCredentials);
    //   },
    //   error: (err: any) => {
    //     console.log(err);
    //   },
    // });
  }

  getImages() {
    this.imagePicker.getPictures(this.options).then(
      (results) => {
        for (var i = 0; i < results.length; i++) {
          this.imageUrl = 'data:image/jpeg;base64,' + results[i];
          Utils.dataUrlToFile('data:image/jpeg;base64,' + results[i], 'image' + Math.random() * 100).then(
            (res: any) => {
              console.log(res);
              const uploadFileObj = {
                ...this.uploadCredentials,
                file: res,
              };
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
          );
        }
      },
      (err) => {}
    );
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
