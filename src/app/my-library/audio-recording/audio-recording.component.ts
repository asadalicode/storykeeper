import { Platform } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '@app/@shared/sevices/api.service';
import { Story, StoryFile } from '@app/@shared/models';

@Component({
  selector: 'app-audio-recording',
  templateUrl: './audio-recording.component.html',
  styleUrls: ['./audio-recording.component.scss'],
})
export class AudioRecordingComponent implements OnInit {
  date = '1/1/2020';
  status = 'published';
  story!: Story;
  isLoading = true;
  constructor(private platform: Platform, private apiService: ApiService, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.getStory();
    this.recordingStatus();
  }

  get routeParams() {
    let params: any;
    this.activatedRoute.params.subscribe((res: any) => {
      params = res;
    });
    return params;
  }

  getStory() {
    this.apiService
      .getDetails(`/api/books/${this.routeParams.bookId}/Stories/${this.routeParams.storyId}`, Story)
      .subscribe({
        next: (res: any) => {
          this.story = res;
          if (this.story.answer) {
            this.getServerFileUrl();
          } else {
            this.isLoading = false;
          }
        },
        error: (err: any) => {
          this.isLoading = false;
        },
      });
  }

  getServerFileUrl() {
    this.isLoading = true;
    this.apiService
      .getDetails(
        `/api/Files/book/${this.routeParams.bookId}/story/${this.routeParams.storyId}?fileName=${this.story.answer}`,
        StoryFile
      )
      .subscribe({
        next: (res: any) => {
          if (res.url) {
            this.story.answer = res.url;
          }
          this.isLoading = false;
        },
        error: (error: any) => {
          this.isLoading = false;
        },
      });
  }

  recordingStatus(): void {
    this.activatedRoute.queryParams.subscribe((res: any) => {
      this.status = res.type;
    });
  }
  get isWeb(): boolean {
    return !this.platform.is('cordova');
  }
}
