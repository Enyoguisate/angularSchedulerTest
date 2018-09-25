import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { PrimeNgPage } from '../prime-ng/prime-ng';

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  home: any;
  prime: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams
    ) {
      this.home = HomePage;
      this.prime = PrimeNgPage;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}
