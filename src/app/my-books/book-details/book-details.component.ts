import { ActivatedRoute, Router } from '@angular/router';
import { Platform, ViewWillEnter } from '@ionic/angular';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ApiService } from '@app/@shared/sevices/api.service';
import { chapterStatus } from '@app/@shared/constants';
import { listAnimation, Story, StoryFile } from '@app/@shared/models';
import { SharedService } from '@app/@shared/sevices/shared.service';
import { forkJoin, map } from 'rxjs';
import { VoiceRecorder } from 'capacitor-voice-recorder';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss'],
  animations: [listAnimation],
})
export class BookDetailsComponent implements OnInit, ViewWillEnter, OnDestroy {
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

  get bookImg(): string {
    return this.sharedService.getImgInStorage();
  }
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
        // if(res) {
        // this.getGroupedStories(res)
        // }
        this.isLoading = false;
      },
      error: (error: any) => {
        this.isLoading = false;
      },
    });
  }

  getGroupedStories(res: Story[]) {
    forkJoin(
      res.map((bookStory: any) =>
        this.apiService
          .getDetails(
            `/api/Files/book/${bookStory.bookId}/story/${bookStory.id}?fileName=${bookStory.answer}`,
            StoryFile
          )
          .pipe(
            // map each Location to a cloned provider object
            map((response) =>
              [response].map((item: any) => {
                let audio: any = new Audio(item.url);
                return {
                  ...bookStory,
                  answer: audio,
                };
              })
            )
          )
      )
    ).subscribe((p: any) => {
      let result: any = [];
      p.forEach((element: any, index: any) => {
        element.forEach((el: any) => {
          result.push(el);
        });
      });
      this.bookStories = [...result];
      console.log(this.bookStories);
    });
  }

  gotoRecording(story: Story) {
    // this.sharedService.setAudioInStorage(story.answer)
    this.router.navigate([
      `my-books/record-story/${this.routeParams.bookId}/${this.routeParams.bookTitle}/${story.id}`,
    ]);
  }

  ngOnDestroy() {
    //   console.log("destroy")
    //  VoiceRecorder.getCurrentStatus().then((res:any)=> {
    //   console.log(res)
    //   if(res.status=='RECORDING') {
    //     console.log(res)
    //     VoiceRecorder.stopRecording()
    //   }
    //   })
  }
}
