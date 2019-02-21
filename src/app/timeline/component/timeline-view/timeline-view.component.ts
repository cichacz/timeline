import {Component, Input, OnInit} from '@angular/core';
import {select} from '@angular-redux/store';
import {TimelineItem} from '@timeline/model/timeline-item';
import TimelineActions from '@timeline/store/actions';
import {Observable} from 'rxjs';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-timeline-view',
  templateUrl: './timeline-view.component.html',
  styleUrls: ['./timeline-view.component.scss']
})
export class TimelineViewComponent implements OnInit {
  @Input() timelineName: string;
  @select(['timeline', 'present', 'listItems']) timelineItems$: Observable<TimelineItem[]>;

  constructor(
    private timelineActions: TimelineActions
  ) { }

  ngOnInit() {
    this.timelineActions.loadEntries();
  }

  addEntry() {
    this.timelineItems$.pipe(first()).subscribe(items => {
      const timelineItem = new TimelineItem();
      timelineItem.id = items.length + 1;
      this.timelineActions.addEntry(timelineItem);
    });
  }
}
