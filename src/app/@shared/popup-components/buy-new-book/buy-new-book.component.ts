import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ModalDismissRole } from '@app/@shared/constants';
import { ModalController } from '@ionic/angular';
import { ApiService } from '@app/@shared/sevices/api.service';
import { ToastService } from '@app/@shared/sevices/toast.service';

@Component({
  selector: 'app-buy-new-book',
  templateUrl: './buy-new-book.component.html',
  styleUrls: ['./buy-new-book.component.scss'],
})
export class BuyNewBookComponent implements OnInit {
  isLoading = false;
  constructor(
    private modalController: ModalController,
    private router: Router,
    private apiService: ApiService,
    private toastService: ToastService
  ) {}

  ngOnInit(): void {}

  buyBook() {
    this.isLoading = true;
    let randomNumb = Math.floor(Math.random() * 30) + 1;
    const randomTestBook = {
      name: 'My new book' + randomNumb,
      image: 'https://www.linkpicture.com/q/book2.svg',
      recipientEmail: 'string',
      recipientName: 'string',
      type: 1,
    };
    this.apiService.post('/api/Books', randomTestBook).subscribe({
      next: (res) => {
        this.isLoading = false;
        this.toastService.showToast('success', 'New book is available');
        this.dismiss(false);
      },
      error: (error) => {
        this.isLoading = false;
      },
    });
  }

  dismiss(isSubmitted: boolean = false) {
    let role = isSubmitted ? ModalDismissRole.submitted : ModalDismissRole.backdroped;
    this.modalController.dismiss('', role);
    this.router.navigate(['tabs/my-library']);
    // this.router.navigate(['tabs/payment-methods']);
  }
}
