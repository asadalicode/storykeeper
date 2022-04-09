import { Faq } from './../../@shared/models/faq';
import { Component, OnInit, ViewChild } from '@angular/core';
import { IonAccordionGroup, Platform } from '@ionic/angular';
import { ApiService } from '@app/@shared/sevices/api.service';
import { forkJoin } from 'rxjs';
import * as _ from 'lodash';
import { Category, QACategory } from '@app/@shared/models';
@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.scss'],
})
export class HelpComponent implements OnInit {
  FAQs: Faq[] = [
    // {
    //   header: 'App for Co-parents',
    //   questions: [
    //     { question: 'How do I set up my App?' },
    //     { question: 'How do I password protect my account?' },
    //     { question: 'How do I set up my App?' },
    //   ],
    // },
    // {
    //   header: 'Account Information',
    //   questions: [
    //     { question: 'How do I set up my App?' },
    //     { question: 'How do I password protect my account?' },
    //     { question: 'How do I set up my App?' },
    //   ],
    // },
    // {
    //   header: 'Connecting Co-parent & Creating',
    //   questions: [
    //     { question: 'If I’m a third party, how do I connect?' },
    //     { question: 'How do I delete or disconnect from a member?' },
    //     { question: 'How do I delete or disconnect from a member?' },
    //     { question: 'How do I create event account? ' },
    //   ],
    // },
  ];
  dataModel: any;
  categories: any;
  Questions: any;
  qID: number = -1;
  constructor(private platform: Platform, private apiService: ApiService) {}

  ngOnInit(): void {
    this.getHelpData();
  }

  get isWeb(): boolean {
    return !this.platform.is('cordova');
  }

  getHelpData() {
    const questionCategories = this.apiService.get('/api/QACategories', Category);
    const questionAnswers = this.apiService.get('/api/InfoData/QA', QACategory);
    forkJoin([questionCategories, questionAnswers]).subscribe((res: any) => {
      if (res) {
        this.categories = res[0];
        this.Questions = res[1];
        // let arr3 = res[0].map((item:any, i:any) => Object.assign({}, item, res[1][i]));
        // console.log(arr3);
      }
    });
  }

  // matchCategory(cat:any){
  //   if()
  // }
  showAns(id: any) {
    if (this.qID == id) {
      this.qID = -1;
    } else {
      this.qID = id;
    }
  }
}
