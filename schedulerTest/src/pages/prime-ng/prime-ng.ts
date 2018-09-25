import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { CalendarOptionsInterface } from './calendar-options.interface';
import * as moment from 'moment';

@IonicPage()
@Component({
  selector: 'page-prime-ng',
  templateUrl: 'prime-ng.html',
})
export class PrimeNgPage {

  @ViewChild('calendar') calendar;

  selectedDay: Date = new Date();
  calendarOptions: CalendarOptionsInterface = {
    height: 'parent',
    fixedWeekCount : false,
    defaultDate: new Date().toString(),
    editable: true,
    eventLimit: true, // allow "more" link when too many events
    events: [
      {
        title: 'Event 1',
        start: '2018-09-25',
        end: '2018-09-25'
      },
      {
        title: 'Event 2',
        start: '2018-09-25',
        end: '2018-10-03'
      },
      {
        title: 'Event 3',
        start: '2018-09-27',
        end: '2018-10-07'
      },
      {
        title: 'Event 4',
        start: '2018-10-01',
        end: '2018-10-05'
      },
      {
        title: 'Event 5',
        start: '2018-09-26',
        end: '2018-09-30'
      },
      {
        title: 'Event 6',
        start: '2018-09-27',
        end: '2018-09-30'
      },
      {
        title: 'Event 7',
        start: '2018-09-26',
        end: '2018-09-29'
      }
    ]
  };


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PrimeNgPage');
  }

  addEvent(){
    console.log('selectedDay', this.selectedDay);    
    let modal = this.modalCtrl.create('EventModalPage', { selectedDay: this.selectedDay });
    modal.present();
    modal.onDidDismiss(data => {
      console.log('data', data);
      if (data) {
        let eventData = data;
        console.log('data', data);
        eventData.start = moment(data.start).format('YYYY-MM-DD')
        
        eventData.end = moment(data.end).format('YYYY-MM-DD');
        
        eventData.title = data.title;
        let events = this.calendarOptions.events;
        events.push(eventData);
        this.calendarOptions.events = [];
        setTimeout(() => {
          this.calendarOptions.events = events;
          console.log('this.eventSource', this.calendarOptions.events);
          console.log('this.calendar', this.calendar.element);
        });
      }
    });
  }

}
