import { Book } from '@app/@shared/models';
import { ApiService } from './../../@shared/sevices/api.service';
import { ImagePicker } from '@awesome-cordova-plugins/image-picker/ngx';
import { Router, ActivatedRoute } from '@angular/router';
import { Platform, ModalController, IonRouterOutlet } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Utils } from '@app/@shared';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.scss'],
})
export class EditBookComponent implements OnInit {
  step1Form!: FormGroup;
  isLoading = false;
  step = 1;
  book!: Book;
  options = {
    width: 200,
    quality: 30,
    outputType: 1,
  };

  List = [
    {
      type: 'Added Questions',
      questions: [
        {
          id: 1,
          thumbnail: '',
          question: 'What is your favorite game',
          description: 'string',
        },
        {
          id: 2,
          thumbnail: '',
          question: 'What is your favorite pet',
          description: 'string',
        },
        {
          id: 3,
          thumbnail: '',
          question: 'What is your favorite subject',
          description: 'string',
        },
      ],
    },
    {
      type: 'Family Questions',
      questions: [
        {
          id: 4,
          thumbnail: '',
          question: 'What is your favorite hobby',
          description: 'string',
        },
        {
          id: 5,
          thumbnail: '',
          question: 'What is your favorite game',
          description: 'string',
        },
        {
          id: 6,
          thumbnail: '',
          question: 'What is your favorite game',
          description: 'string',
        },
      ],
    },
  ];

  list: any;
  imageUrl: any = '';
  uploadCredentials: any;
  constructor(
    private platform: Platform,
    private formBuilder: FormBuilder,
    private modalController: ModalController,
    private router: Router,
    private imagePicker: ImagePicker,
    private apiService: ApiService,
    private route: ActivatedRoute
  ) {
    this.createForm();
  }

  ngOnInit(): void {
    // this.getFileCredentials();
    this.getBookDetails();
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
      bookTitle: ['', [Validators.required]],
      recipientsName: ['', [Validators.required]],
      recipientsEmail: ['', [Validators.required]],
      image: [''],
    });
  }

  getBookDetails() {
    this.apiService.get(`/api/Books/${this.routeParams.bookId}`, Book).subscribe(
      (res) => {
        console.log(res);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  getFileCredentials() {
    console.log(this.routeParams);
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

  saveStep1() {
    this.step = 2;
  }

  save() {
    this.dismiss();
  }
  dismiss() {
    this.modalController.dismiss('button clicked');
  }
}
