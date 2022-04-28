import { ApiService } from './../../@shared/sevices/api.service';
import { ModalController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';
import { ToastService } from '@app/@shared/sevices/toast.service';

@Component({
  selector: 'app-add-new-email',
  templateUrl: './add-new-email.component.html',
  styleUrls: ['./add-new-email.component.scss'],
})
export class AddNewEmailComponent implements OnInit {
  emailForm!: FormGroup;
  @Input() title: string = '';

  isLoading = false;
  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    private modalController: ModalController,
    private toastService: ToastService
  ) {}

  ngOnInit(): void {
    this.emailForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  dismiss(value = false) {
    this.modalController.dismiss('button clicked', value ? 'submitted' : 'closed');
  }

  save() {
    console.log(this.emailForm.value);
    this.isLoading = true;
    this.apiService.post(`/api/Users/AddEmail`, this.emailForm.value).subscribe({
      complete: () => {
        console.log('complate');
      },
      next: (res: any) => {
        this.toastService.showToast('success', 'New Email successfully added.');
        this.dismiss(true);
        this.isLoading = false;
      },
      error: (error: any) => {
        this.isLoading = false;
      },
    });
  }
}
