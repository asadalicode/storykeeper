import { ActivatedRoute, Router } from '@angular/router';
import { Platform, ViewWillEnter } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '@app/@shared/sevices/api.service';
import { chapterStatus } from '@app/@shared/constants';
import { listAnimation, Story } from '@app/@shared/models';
import { SharedService } from '@app/@shared/sevices/shared.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss'],
  animations: [listAnimation],
})
export class BookDetailsComponent implements OnInit, ViewWillEnter {
  isLoading = false;
  bookStories: any = [];
  chapterStatus = chapterStatus;
  constructor(
    private platform: Platform,
    private router: Router,
    private route: ActivatedRoute,
    private sharedService: SharedService,
    private apiService: ApiService
  ) {}

  ngOnInit(): void {}
  get isWeb(): boolean {
    return !this.platform.is('cordova');
  }

  //open side menu
  openMenu() {
    this.sharedService.triggerMsg(true);
  }

  ionViewWillEnter() {
    this.getBookStories();
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
        this.isLoading = false;
      },
      error: (error: any) => {
        this.isLoading = false;
      },
    });
  }

  gotoRecording(story: any) {
    this.router.navigate([
      `my-books/record-story/${this.routeParams.bookId}/${this.routeParams.bookTitle}/${story.id}`,
    ]);
  }
}
