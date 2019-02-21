import {State} from '@store/interface/state';
import {TimelineItem} from '@timeline/model/timeline-item';

export default class TimelineState implements State {
  listItems: TimelineItem[] = [];
  currentItem: TimelineItem;
}
