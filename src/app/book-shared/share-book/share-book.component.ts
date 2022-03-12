import { ModalController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-share-book',
  templateUrl: './share-book.component.html',
  styleUrls: ['./share-book.component.scss'],
})
export class ShareBookComponent implements OnInit {
  shareFrom!: FormGroup;
  constructor(private formBuilder: FormBuilder, private modalController: ModalController) {}

  ngOnInit(): void {
    this.shareFrom = this.formBuilder.group({
      email: ['', [Validators.required]],
    });
  }

  dismiss(value = false) {
    this.modalController.dismiss('button clicked');
  }

  save() {
    console.log(this.shareFrom.value);
    this.dismiss(false);
  }
}
