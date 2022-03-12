import { ActivatedRoute, Router } from '@angular/router';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ModalDismissRole } from '@app/@shared/constants';
import { Platform, IonRouterOutlet, ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-edit-chapter',
  templateUrl: './edit-chapter.component.html',
  styleUrls: ['./edit-chapter.component.scss'],
})
export class EditChapterComponent implements OnInit {
  form!: FormGroup;
  isLoading = false;
  step = 1;
  options = {
    width: 200,
    quality: 30,
    outputType: 1,
  };

  list: any;
  imageUrl: any = '';
  uploadCredentials: any;
  constructor(
    private platform: Platform,
    private formBuilder: FormBuilder,
    private modalController: ModalController,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.createForm();
  }

  ngOnInit(): void {}

  get routeParams() {
    let params: any;
    this.route.params.subscribe((res: any) => {
      params = res;
    });
    return params;
  }

  private createForm() {
    this.form = this.formBuilder.group({
      chapterName: ['', [Validators.required]],
      description: ['', [Validators.required]],
    });
  }

  get isWeb(): boolean {
    return !this.platform.is('cordova');
  }

  navigateTo(url: string) {
    this.router.navigate([url]);
  }

  save() {
    this.dismiss();
  }
  dismiss() {
    this.modalController.dismiss('button clicked');
  }
}
