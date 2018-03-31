import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FacultyPage } from '../faculty/faculty';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
  }
  login(){
    this.navCtrl.push(FacultyPage);
  }


}

