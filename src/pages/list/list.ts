import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {ItemPage} from './../item/item';
import {NewItemPage} from './../new-item/new-item';
@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  selectedItem: any;
  icons: string[];
  items: Array<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

   

    this.items = [
      {name : "iPhone 7", date_of_purchase:"2017-02-02", gear_value:777.77, files : [{path : '/assets/iphone7.jpg'}], premium_price  : 10 },
      {name : "iPhone 7", date_of_purchase:"2017-02-02", gear_value:777.77, files : [{path : '/assets/iphone7.jpg'}], premium_price  : 10 },
      {name : "iPhone 7", date_of_purchase:"2017-02-02", gear_value:777.77, files : [{path : '/assets/iphone7.jpg'}], premium_price  : 10 },
      {name : "iPhone 7", date_of_purchase:"2017-02-02", gear_value:777.77, files : [{path : '/assets/iphone7.jpg'}], premium_price  : 10 },
      {name : "iPhone 7", date_of_purchase:"2017-02-02", gear_value:777.77, files : [{path : '/assets/iphone7.jpg'}], premium_price  : 10 }
    ];
  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(ItemPage, {
      item: item
    });
  }

  addAnItem() {
    this.navCtrl.push(NewItemPage);
  }
}
