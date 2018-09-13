import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewstakComponent } from './newstak.component';

describe('NewstakComponent', () => {
  let component: NewstakComponent;
  let fixture: ComponentFixture<NewstakComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewstakComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewstakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
