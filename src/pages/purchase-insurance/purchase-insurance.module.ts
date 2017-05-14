import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PurchaseInsurancePage } from './purchase-insurance';

@NgModule({
  declarations: [
    PurchaseInsurancePage,
  ],
  imports: [
    IonicPageModule.forChild(PurchaseInsurancePage),
  ],
  exports: [
    PurchaseInsurancePage
  ]
})
export class PurchaseInsurancePageModule {}
