import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.storykeeperv1.app',
  appName: 'storykeeper',
  webDir: 'www',
  bundledWebRuntime: false,
  cordova: {
    preferences: {
      Hostname: 'app',
      Fullscreen: 'false',
      DisallowOverscroll: 'true',
      Orientation: 'portrait',
      StatusBarStyle: 'lightcontent',
      AutoHideSplashScreen: 'false',
      SplashScreen: 'screen',
      SplashScreenDelay: '3000',
      ShowSplashScreenSpinner: 'false',
      SplashMaintainAspectRatio: 'true',
      FadeSplashScreenDuration: '500',
      SplashShowOnlyFirstTime: 'true',
    },
  },
};

export default config;
