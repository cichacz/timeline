import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TimelineItem} from '@timeline/model/timeline-item';
import * as moment from 'moment';
import {TimelineActions} from '@timeline/store/actions';
import {NgxMaterialTimepickerTheme} from 'ngx-material-timepicker';

@Component({
  selector: 'app-timeline-item',
  templateUrl: './timeline-item.component.html',
  styleUrls: ['./timeline-item.component.scss']
})
export class TimelineItemComponent implements OnInit {
  private _timelineItemOriginal: TimelineItem;

  item: TimelineItem;
  hovering: boolean;
  editMode = true;
  timepickerTheme: NgxMaterialTimepickerTheme = {
    container: {
      bodyBackgroundColor: '#fff',
      buttonColor: '#009688'
    },
    dial: {
      dialBackgroundColor: '#009688',
    },
    clockFace: {
      clockFaceBackgroundColor: '#eeeeee',
      clockHandColor: '#009688',
      clockFaceTimeInactiveColor: '#a7a7a7'
    }
  };

  @Input() set timelineItem(timelineItem: TimelineItem) {
    this._timelineItemOriginal = timelineItem;
    this.item = new TimelineItem({...timelineItem});
    this.editMode = !timelineItem.title;
  }

  get timelineItem() {
    return this.item;
  }

  constructor(
    private timelineActions: TimelineActions
  ) { }

  ngOnInit() {
  }

  updateTime(time: string) {
    this.item.timestamp = moment(time, 'h:m a');
  }

  saveItem() {
    this.timelineActions.updateEntry(this.item);
    this.editMode = false;
  }

  deleteItem() {
    this.timelineActions.removeEntry(this.item);
  }

  cancelEdit() {
    if (!this._timelineItemOriginal.title) {
      this.deleteItem();
      return;
    }
    // re-run setter
    this.timelineItem = this._timelineItemOriginal;
    this.editMode = false;
  }
}
