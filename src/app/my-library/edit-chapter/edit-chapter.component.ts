import { ActivatedRoute, Router } from '@angular/router';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ModalDismissRole } from '@app/@shared/constants';
import { Platform, IonRouterOutlet, ModalController } from '@ionic/angular';
import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '@app/@shared/sevices/api.service';
import { ToastService } from '@app/@shared/sevices/toast.service';
import { Story } from '@app/@shared/models';
@Component({
  selector: 'app-edit-chapter',
  templateUrl: './edit-chapter.component.html',
  styleUrls: ['./edit-chapter.component.scss'],
})
export class EditChapterComponent implements OnInit {
  form!: FormGroup;
  @Input() bookId = '';
  @Input() storyId = '';
  @Input() storyDetails: any = {};
  isLoading = false;
  step = 1;
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
    private router: Router,
    private apiService: ApiService,
    private toastService: ToastService,
    private route: ActivatedRoute
  ) {
    this.createForm();
  }

  ngOnInit(): void {
    this.setStoryForm();
  }

  setStoryForm() {
    if (this.storyDetails) {
      this.form.patchValue(this.storyDetails);
    }
  }

  get routeParams() {
    let params: any;
    this.route.params.subscribe((res: any) => {
      params = res;
    });
    return params;
  }

  private createForm() {
    this.form = this.formBuilder.group({
      question: ['', [Validators.required]],
      description: ['', [Validators.required]],
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
    this.apiService
      .put(`/api/books/${this.storyDetails.bookId}/Stories/${this.storyDetails.id}`, this.form.value)
      .subscribe({
        next: (res: any) => {
          this.isLoading = false;
          this.dismiss(true);
        },
        error: (error: any) => {
          this.isLoading = false;
        },
      });
  }
  dismiss(value = false) {
    this.modalController.dismiss('button clicked', value ? 'submitted' : 'closed');
  }
}
