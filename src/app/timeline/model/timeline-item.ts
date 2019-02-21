import {Moment} from 'moment';
import * as moment from 'moment';

export class TimelineItem {
  id: number;
  title: string;
  description: string;
  timestamp: Moment;

  constructor(data: any = {}) {
    Object.assign(this, data);

    // ensure we don't get object ref here
    if (data.hasOwnProperty('timestamp')) {
      this.timestamp = moment(data.timestamp);
    }
  }
}
