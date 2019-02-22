import { TestBed } from '@angular/core/testing';

import { TimelineService } from './timeline.service';
import {TimelineModule} from '@timeline/timeline.module';

describe('TimelineService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      TimelineModule
    ]
  }));

  it('should be created', () => {
    const service: TimelineService = TestBed.get(TimelineService);
    expect(service).toBeTruthy();
  });

  it('should return test item', (done: DoneFn) => {
    const service: TimelineService = TestBed.get(TimelineService);
    service.getEntries().subscribe(items => {
      expect(items.length).toEqual(1);
      expect(items[0].title).toEqual('Test');
      done();
    });
  });
});
