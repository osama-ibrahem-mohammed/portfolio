import { TestBed } from '@angular/core/testing';

import { SkillProvService } from './skill-prov.service';

describe('SkillProvService', () => {
  let service: SkillProvService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SkillProvService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
