import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesModule } from '../services/services.module';
import { SharedModule } from '../shared/shared.module';
import { ActivitiesComponent } from './activities/activities.component';
import { CalendarComponent } from './calendar/calendar.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    ActivitiesComponent,
    CalendarComponent,
    StatisticsComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    ServicesModule,
    SharedModule
  ],
  exports: [
    ActivitiesComponent,
    CalendarComponent,
    StatisticsComponent,
    MenuComponent
  ]
})
export class ViewModule { }

