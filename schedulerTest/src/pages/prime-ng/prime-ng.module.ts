import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PrimeNgPage } from './prime-ng';
import { CalendarModule } from 'ap-angular2-fullcalendar/index'

@NgModule({
  declarations: [
    PrimeNgPage,
    
  ],
  imports: [
    IonicPageModule.forChild(PrimeNgPage),
    CalendarModule
  ],
})
export class PrimeNgPageModule {}
