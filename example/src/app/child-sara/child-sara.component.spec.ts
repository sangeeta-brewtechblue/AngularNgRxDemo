import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildSaraComponent } from './child-sara.component';

describe('ChildSaraComponent', () => {
  let component: ChildSaraComponent;
  let fixture: ComponentFixture<ChildSaraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChildSaraComponent]
    });
    fixture = TestBed.createComponent(ChildSaraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
