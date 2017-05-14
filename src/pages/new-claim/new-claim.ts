import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


import {Camera, CameraOptions} from '@ionic-native/camera';
/**
 * Generated class for the NewClaimPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-new-claim',
  templateUrl: 'new-claim.html',
})
export class NewClaimPage {
  public base64Image: string;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private camera: Camera) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewClaimPage');
  }

  takePicture(){
    this.camera.getPicture({
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }).then((imageData) => {
      // imageData is a base64 encoded string
        this.base64Image = "data:image/jpeg;base64," + imageData;
        console.log("Then we upload the image to the cloud")
    }, (err) => {
        console.log(err);
    });
  }



}
