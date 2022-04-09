import { ApiService } from './../../@shared/sevices/api.service';
import { ModalController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';
import { ToastService } from '@app/@shared/sevices/toast.service';

@Component({
  selector: 'app-share-book',
  templateUrl: './share-book.component.html',
  styleUrls: ['./share-book.component.scss'],
})
export class ShareBookComponent implements OnInit {
  shareFrom!: FormGroup;
  @Input() title: string = '';
  @Input() bookId: string = '';
  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    private modalController: ModalController,
    private toastService: ToastService
  ) {}

  ngOnInit(): void {
    this.shareFrom = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  dismiss(value = false) {
    this.modalController.dismiss('button clicked');
  }

  save() {
    console.log(this.shareFrom.value);
    this.apiService.post(`/api/Books/${this.bookId}/share`, this.shareFrom.value).subscribe({
      complete: () => {
        console.log('complate');
      },
      next: (res: any) => {
        this.dismiss(false);
      },
      error: (error: any) => {},
    });
  }
}
