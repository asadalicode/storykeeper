import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.scss'],
})
export class UpdateBookComponent implements OnInit {
  step1Form!: FormGroup;
  isLoading = false;
  step = 2;
  constructor(private platform: Platform, private formBuilder: FormBuilder, private router: Router) {
    this.createForm();
  }

  ngOnInit(): void {}

  private createForm() {
    this.step1Form = this.formBuilder.group({
      bookTitle: ['', [Validators.required]],
      recipientsName: ['', [Validators.required]],
      recipientsEmail: ['', [Validators.required]],
    });
  }

  get isWeb(): boolean {
    return !this.platform.is('cordova');
  }

  navigateTo(url: string) {
    this.router.navigate([url]);
  }

  saveStep1() {
    this.step = 2;
  }
}
