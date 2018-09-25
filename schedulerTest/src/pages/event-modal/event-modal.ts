import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import * as moment from 'moment';
import { EventsInterface } from '../prime-ng/calendar-options.interface';
 
@IonicPage()
@Component({
  selector: 'page-event-modal',
  templateUrl: 'event-modal.html',
})
export class EventModalPage {
 
  event: EventsInterface = { title: 'empty title', start: new Date().toISOString(), end: new Date().toISOString()};
  minDate = new Date().toISOString();
  // allDay: boolean;

  constructor(
    public navCtrl: NavController, 
    private navParams: NavParams, 
    public viewCtrl: ViewController
    ) {
    let preselectedDate = moment(this.navParams.get('selectedDay')).format();
    this.event.start = preselectedDate;
    this.event.end = preselectedDate;
  }
 
  cancel() {
    this.viewCtrl.dismiss();
  }
 
  save() {
    this.viewCtrl.dismiss(this.event);
  }
 
}