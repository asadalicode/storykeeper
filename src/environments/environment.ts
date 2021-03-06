// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

// `.env.ts` is generated by the `npm run env` command
// `npm run env` exposes environment variables as JSON for any usage you might
// want, like displaying the version or getting extra config from your CI bot, etc.
// This is useful for granularity you might need beyond just the environment.
// Note that as usual, any environment variables you expose through it will end up in your
// bundle, and you should not use it for any sensitive information like passwords or keys.
import { env } from './.env';

export const environment = {
  production: false,
  version: env['npm_package_version'] + '-dev',
  serverUrl: 'https://api.storykeeper.app',
  defaultLanguage: 'en-US',
  supportedLanguages: ['en-US', 'es-ES'],
  api: 'https://j3x0ln9gj7.execute-api.ap-northeast-1.amazonaws.com/dev/',
  stripe_pb_key:
    'pk_live_51KCReJEtRGO5Xeaeyldx6BkYLZak8opPPfdCTMaQnhH04Ifrmbt2Xt8s7Wmr36U3MqH25XUGqfs1Wi4TBYGpEGZl00UZIG2Idh',
  strikePK: 'pk_test_YssveZBA1kucfaTfZbeDwauN',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
