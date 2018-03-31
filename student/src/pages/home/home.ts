import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { MarkPage } from '../mark/mark';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {}
  rootPage:any="HomePage"
  login(){
    this.navCtrl.push(TabsPage);
  }

}
