import { TimelineItem } from './timeline-item';
import {Moment} from 'moment';

describe('TimelineItem', () => {
  it('should create an instance', () => {
    expect(new TimelineItem()).toBeTruthy();
  });
  it('should have timestamp as Moment object', () => {
    const timeline = new TimelineItem({timestamp: '9:00:00'});
    expect('format' in timeline.timestamp).toBeTruthy();
  });
});
