/*
 * Entry point of the application.
 * Only platform bootstrapping code should be here.
 * For app-specific initialization, use `app/app.component.ts`.
 */

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from '@app/app.module';
import { environment } from '@env/environment';
import { defineCustomElements } from '@stripe-elements/stripe-elements/loader';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .then(() => defineCustomElements(window))
  .catch((err) => console.error(err));
