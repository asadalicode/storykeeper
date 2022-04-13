import { ActivatedRoute, Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '@app/@shared/sevices/api.service';
import { chapterStatus } from '@app/@shared/constants';
import { Story } from '@app/@shared/models';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss'],
})
export class BookDetailsComponent implements OnInit {
  isLoading = false;
  bookStories: any = [];
  chapterStatus = chapterStatus;
  constructor(
    private platform: Platform,
    private router: Router,
    private route: ActivatedRoute,
    private apiService: ApiService
  ) {}

  ngOnInit(): void {
    this.getBookStories();
  }
  get isWeb(): boolean {
    return !this.platform.is('cordova');
  }

  get routeParams() {
    let params: any;
    this.route.params.subscribe((res: any) => {
      params = res;
    });
    return params;
  }

  getBookStories() {
    this.isLoading = true;
    this.apiService.get(`/api/books/${this.routeParams.bookId}/Stories`, Story).subscribe({
      next: (res: any) => {
        this.bookStories = res;
        console.log(this.bookStories);
        this.isLoading = false;
      },
      error: (error: any) => {
        this.isLoading = false;
      },
    });
  }

  gotoRecording() {
    this.router.navigate(['tabs/my-books/record-story/1']);
  }
}
