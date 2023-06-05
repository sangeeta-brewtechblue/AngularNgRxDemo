import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildTomComponent } from './child-tom.component';

describe('ChildTomComponent', () => {
  let component: ChildTomComponent;
  let fixture: ComponentFixture<ChildTomComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChildTomComponent]
    });
    fixture = TestBed.createComponent(ChildTomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
