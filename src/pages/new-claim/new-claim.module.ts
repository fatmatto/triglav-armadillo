import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewClaimPage } from './new-claim';

@NgModule({
  declarations: [
    NewClaimPage,
  ],
  imports: [
    IonicPageModule.forChild(NewClaimPage),
  ],
  exports: [
    NewClaimPage
  ]
})
export class NewClaimPageModule {}
