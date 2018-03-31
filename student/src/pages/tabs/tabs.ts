import { Component } from '@angular/core';

import { MarkPage } from '../mark/mark';
import { AttendancePage } from '../attendance/attendance';
import { ProfilePage } from '../profile/profile';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = MarkPage;
  tab2Root = AttendancePage;
  tab3Root = ProfilePage;

  constructor() {

  }
}
