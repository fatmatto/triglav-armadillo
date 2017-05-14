import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {ListPage} from '../list/list';
/**
 * Generated class for the ContractCreatedPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-contract-created',
  templateUrl: 'contract-created.html',
})
export class ContractCreatedPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContractCreatedPage');
  }

  takeMeHome() {
    this.navCtrl.push(ListPage)
  }

}
