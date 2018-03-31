import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MarkPage } from './mark';

@NgModule({
  declarations: [
    MarkPage,
  ],
  imports: [
    IonicPageModule.forChild(MarkPage),
  ],
})
export class MarkPageModule {}
