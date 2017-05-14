import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { ItemPage } from '../pages/item/item';
import { NewItemPage } from '../pages/new-item/new-item';
import { NewClaimPage } from '../pages/new-claim/new-claim';
import { PurchaseInsurancePage } from '../pages/purchase-insurance/purchase-insurance';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Camera, CameraOptions } from '@ionic-native/camera'

import { ContractCreatedPage} from '../pages/contract-created/contract-created';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    NewItemPage,
    ItemPage,
    NewClaimPage,
    PurchaseInsurancePage,
    ContractCreatedPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    NewItemPage,
    ItemPage,
    NewClaimPage,
    PurchaseInsurancePage,
    ContractCreatedPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
