import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatprojComponent } from './catproj.component';

describe('CatprojComponent', () => {
  let component: CatprojComponent;
  let fixture: ComponentFixture<CatprojComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatprojComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CatprojComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
