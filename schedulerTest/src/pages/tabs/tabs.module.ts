import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TabsPage } from './tabs';
import { PrimeNgPageModule } from '../prime-ng/prime-ng.module';
import { HomePagePageModule } from '../home/home.module';

@NgModule({
  declarations: [
    TabsPage
  ],
  imports: [
    IonicPageModule.forChild(TabsPage),
    HomePagePageModule,
    PrimeNgPageModule
  ],
})
export class TabsPageModule {}
