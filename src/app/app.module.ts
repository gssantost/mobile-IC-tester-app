import { SplashPage } from './../pages/splash/splash';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MessageController } from '../utils/messageCtrl';
import { OpenNativeSettings } from '@ionic-native/open-native-settings';
import { BluetoothProvider } from '../providers/bluetooth/bluetooth';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SplashPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SplashPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    BluetoothSerial,
    MessageController,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    OpenNativeSettings,
    BluetoothProvider
  ]
  
})
export class AppModule {}
