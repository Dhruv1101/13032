import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FacultyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
import { LastPage } from '../last/last';
@IonicPage()
@Component({
  selector: 'page-faculty',
  templateUrl: 'faculty.html',
})
export class FacultyPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }

  submit(){
    this.navCtrl.push(LastPage);
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FacultyPage');
  }

}
