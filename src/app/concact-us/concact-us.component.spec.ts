import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcactUsComponent } from './concact-us.component';

describe('ConcactUsComponent', () => {
  let component: ConcactUsComponent;
  let fixture: ComponentFixture<ConcactUsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConcactUsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConcactUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
