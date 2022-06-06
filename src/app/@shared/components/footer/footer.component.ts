import { Component, OnInit } from '@angular/core';
import { CredentialsService } from '@app/auth';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  constructor(private credentials: CredentialsService) {}

  ngOnInit(): void {}

  get isLoggedIn(): boolean {
    return this.credentials.isAuthenticated();
  }

  routeTo(type: string) {
    switch (type) {
      case 'about':
        window.open('https://www.storykeeperapp.com/', '_blank');
        break;

      case 'privacy':
        window.open('https://www.storykeeperapp.com/privacy-policy', '_blank');
        break;

      case 'terms':
        window.open('https://www.storykeeperapp.com/terms-of-service', '_blank');
        break;

      default:
        break;
    }
  }
}
