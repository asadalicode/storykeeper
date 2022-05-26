import { ModalController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';
import { ToastService } from '@app/@shared/sevices/toast.service';
import { ApiService } from '@app/@shared/sevices/api.service';

@Component({
  selector: 'app-reset-password-email',
  templateUrl: './reset-password-email.component.html',
  styleUrls: ['./reset-password-email.component.scss'],
})
export class ResetPasswordEmailComponent implements OnInit {
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

  sendEmail() {
    console.log(this.emailForm.value);
    this.isLoading = true;
    this.apiService.sendEmail(`/api/Users/SendResetPasswordEmail?email=${this.emailForm.value.email}`).subscribe({
      next: (res: any) => {
        console.log('!@@');
        this.toastService.showToast('success', 'Email successfully sent.');
        this.dismiss(true);
        this.isLoading = false;
      },
      error: (error: any) => {
        this.isLoading = false;
      },
    });
  }
}
