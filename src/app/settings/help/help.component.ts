import { Faq } from './../../@shared/models/faq';
import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';

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
  constructor(private platform: Platform) {}

  ngOnInit(): void {}

  get isWeb(): boolean {
    return !this.platform.is('cordova');
  }
}
