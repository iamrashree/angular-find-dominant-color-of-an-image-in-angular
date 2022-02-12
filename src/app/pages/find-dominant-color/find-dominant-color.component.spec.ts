import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindDominantColorComponent } from './find-dominant-color.component';

describe('FindDominantColorComponent', () => {
  let component: FindDominantColorComponent;
  let fixture: ComponentFixture<FindDominantColorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindDominantColorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindDominantColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
