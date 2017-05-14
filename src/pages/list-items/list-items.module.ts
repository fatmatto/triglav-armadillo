import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListItemsPage } from './list-items';

@NgModule({
  declarations: [
    ListItemsPage,
  ],
  imports: [
    IonicPageModule.forChild(ListItemsPage),
  ],
  exports: [
    ListItemsPage
  ]
})
export class ListItemsPageModule {}
