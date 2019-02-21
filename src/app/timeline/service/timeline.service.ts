import { Injectable } from '@angular/core';
import * as moment from 'moment';
import {of} from 'rxjs';

@Injectable()
export class TimelineService {

  constructor() { }

  getEntries() {
    return of([
      {
        id: 1,
        title: 'Test',
        description: 'Lorem ipsum dolor sit amet...',
        timestamp: moment()
      }
    ]);
  }
}
