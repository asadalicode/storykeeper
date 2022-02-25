import { Faq } from './../../@shared/models/faq';
import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { ApiService } from '@app/@shared/sevices/api.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.scss'],
})
export class HelpComponent implements OnInit {
  FAQs: Faq[] = [
    {
      header: 'App for Co-parents',
      questions: [
        { question: 'How do I set up my App?' },
        { question: 'How do I password protect my account?' },
        { question: 'How do I set up my App?' },
      ],
    },
    {
      header: 'Account Information',
      questions: [
        { question: 'How do I set up my App?' },
        { question: 'How do I password protect my account?' },
        { question: 'How do I set up my App?' },
      ],
    },
    {
      header: 'Connecting Co-parent & Creating',
      questions: [
        { question: 'If I’m a third party, how do I connect?' },
        { question: 'How do I delete or disconnect from a member?' },
        { question: 'How do I delete or disconnect from a member?' },
        { question: 'How do I create event account? ' },
      ],
    },
  ];
  dataModel: any;
  constructor(private platform: Platform, private apiService: ApiService) {}

  ngOnInit(): void {
    this.getHelpData();
  }

  get isWeb(): boolean {
    return !this.platform.is('cordova');
  }

  getHelpData() {
    const questionCategories = this.apiService.get('/api/QACategories');
    const questionAnswers = this.apiService.get('/api/InfoData/QA');
    forkJoin([questionCategories, questionAnswers]).subscribe((res: any) => {
      if (res) {
        console.log(res);
      }
    });
  }
}
