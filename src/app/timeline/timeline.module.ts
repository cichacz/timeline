import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {MatButtonModule, MatInputModule, MatChipsModule, MatFormFieldModule, MatIconModule} from '@angular/material';

import { TimelineViewComponent } from './component/timeline-view/timeline-view.component';
import { TimelineItemComponent } from './component/timeline-item/timeline-item.component';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import TimelineEpics from '@timeline/store/epics';
import TimelineActions from '@timeline/store/actions';
import {TimelineService} from '@timeline/service/timeline.service';
import { TimelineHistoryComponent } from './component/timeline-history/timeline-history.component';

@NgModule({
  declarations: [TimelineViewComponent, TimelineItemComponent, TimelineHistoryComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatChipsModule,
    MatIconModule,
    NgxMaterialTimepickerModule.forRoot()
  ],
  exports: [
    TimelineViewComponent
  ],
  providers: [
    TimelineService,
    TimelineEpics,
    TimelineActions
  ]
})
export class TimelineModule { }
