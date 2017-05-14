import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PurchaseInsurancePage } from './../purchase-insurance/purchase-insurance';
import {Camera, CameraOptions} from '@ionic-native/camera';
/**
 * Generated class for the NewItemPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-new-item',
  templateUrl: 'new-item.html',
})
export class NewItemPage {
  // List of chat messages
  messages : Array<any>;
  // New chat message
  newMessage : string;
  // flags for UI
  showYesNo  : boolean = false;;
  showUploadButton  : boolean = false;
  showDateInput  : boolean = false;
  showPriceInput  : boolean = false;
  showInsuranceInput : boolean = false;
  sendingAMessage : boolean = true;

  // Holder for new insurance
  newItemData : any = {};
  
  // State machine's state
  state : string = 'idle';

  // Image data
  base64Image : string;

  // insurance config
  insurance : any = {};
  // Chosen date
  chosenDate : Date = new Date();

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private camera: Camera) {
    this.messages = [];
    this.showYesNo = false;
  }


  sendMessage(msg : any) {

    console.log("sendMessage, state is ",this.state);
   

    let toSend = msg || this.newMessage;
    if (!toSend)
      return;

    this.messages.push({text : toSend, fromUser : true});

    this.newMessage = "";
  }




  sendMessageAsAGoddamnHuman(msg: string,cb: Function) {
    this.sendingAMessage = true;
    setTimeout(()=>{
      this.messages.push({text : msg, fromUser : false});
      this.newMessage = "";
      this.sendingAMessage = false;

      if (cb)
        cb();
    },2000)
  }

  handleState() {
    console.log("Handiling state "+this.state);
    console.log("NewItemData is ",this.newItemData);
    switch (this.state) {
      case "idle":
        this.sendMessageAsAGoddamnHuman("Hello! I am Donald and I'm here to help you protect your equipment :)",()=>{
          this.sendMessageAsAGoddamnHuman("Do you have the receipt of the item you want to protect?",() => {
            this.showYesNo = true;
          });
        });
        
      break;
      case "waitingForReceipt":
      this.sendMessageAsAGoddamnHuman("Please upload the receipt",()=>{
         this.showUploadButton = true;
      });
      break;
      case "waitingForPrice":
        this.sendMessageAsAGoddamnHuman("Can you tell me how much did you pay for it?",()=>{
          this.showPriceInput = true;
        });
      break;
      case "waitingForDate":
        this.sendMessageAsAGoddamnHuman("Can you tell me when did you buy it?",()=>{
          this.showDateInput = true;
        });
      break;
      case "waitingForInsurance":
        this.sendMessageAsAGoddamnHuman("Let's configure your insurance plan",()=>{
          this.showInsuranceInput = true;
        });
      break;
      case "done":
        this.navCtrl.push(PurchaseInsurancePage, { 
          item : this.newItemData
        });
      break;

    }
  }

  
  handleInputForWaitingForReceiptState(msg : string){
      console.log("handleInputFOrWaitingForReceipt")
     this.newItemData.receipt = msg;

     this.showUploadButton = false;
     this.sendMessageAsAGoddamnHuman("Perfect!",()=>{
       this.state = "waitingForPrice";
       this.handleState()
     })
  }

  handleInputForIdleState(msg : boolean) {
    // Storing user input
    this.newItemData.userHasReceipt = msg;

    // Converting a boolean to yes/no
    let toSend = msg ? 'Yes' : 'No';
   
    this.sendMessage(toSend);

    // Going to the next state (FSM theory is easy after all)
    this.showYesNo = false;
    this.state = 'waitingForReceipt';
    this.handleState();
  }

  handleInputForWaitingForPriceState(msg: string) {
    // TODO add validation
    this.newItemData.price = msg;
    this.sendMessage("€ "+msg);
    this.showPriceInput = false;
    this.sendMessageAsAGoddamnHuman("Ok, that's seems to be a fair price.",()=>{
      
      this.state = "waitingForDate";
      this.handleState();
    })
    
  }

  handleInputForWaitingForDateState(msg: Date) {
    // TODO add validation
    this.newItemData.purchase_date = msg;
    this.showDateInput = false;
    this.sendMessage(msg.toString());
    this.sendMessageAsAGoddamnHuman("Alrighty, we are almost done :)",()=>{
      this.state = "waitingForInsurance";
      this.handleState();
    })
  }

  handleInputForWaitingForInsuranceState(msg : any) {

    this.showInsuranceInput = false;


    var s = "";

    for (var k in this.insurance) {
      if (this.insurance[k] === true)
        s+= k+" ";
    }
    this.sendMessage(s);

    this.sendMessageAsAGoddamnHuman("Thank you! Now i'll get you a price",()=>{
      this.state = "done";
      this.handleState();
    })
  }

  // Opens the camera and stores the picture in a base64St
  takePicture(){
    this.camera.getPicture({
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    })
    .then((imageData) => {

       // imageData is a base64 encoded string
        this.base64Image = "data:image/jpeg;base64," + imageData;

        // We have to do an explicit call to handleUserInput
        this.handleUserInput(this.base64Image)
        
    }, (err) => {
        console.log(err);
    });
  }





  // Takes user input and uses state to perform the correct
  // operation on input
  handleUserInput(msg: any) {
    console.log("Handling the user input for state "+this.state,msg);
    switch (this.state) {
      case "idle":
        this.handleInputForIdleState(msg);
      break;
      case "waitingForReceipt":
        this.handleInputForWaitingForReceiptState(msg);
      break;
      case "waitingForPrice":
        this.handleInputForWaitingForPriceState(msg);
      break;
      case "waitingForDate":
        this.handleInputForWaitingForDateState(msg);
      break
      case "waitingForInsurance":
        this.handleInputForWaitingForInsuranceState(msg);
      break;
    }
  }


  /*
  *  Available states are
  *
  *  idle
  *  waitingForReceipt
  *  WaitingForPrice
  *  WaitingForDate
  */
  ionViewDidLoad() {
    console.log('ionViewDidLoad NewItemPage');
    this.handleState();
  }



}
