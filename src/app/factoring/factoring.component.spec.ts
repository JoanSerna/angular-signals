import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FactoringComponent } from './factoring.component';

describe('FactoringComponent', () => {
  let component: FactoringComponent;
  let fixture: ComponentFixture<FactoringComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FactoringComponent]
    });
    fixture = TestBed.createComponent(FactoringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
