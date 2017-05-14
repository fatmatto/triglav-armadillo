import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PurchaseInsurancePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-purchase-insurance',
  templateUrl: 'purchase-insurance.html',
})
export class PurchaseInsurancePage {
  item : any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.item = this.navParams.get('item');
    console.log("The item is",this.item);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PurchaseInsurancePage');
  }

}
