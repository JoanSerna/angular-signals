import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationListCoComponent } from './operation-list-co.component';

describe('OperationListCoComponent', () => {
  let component: OperationListCoComponent;
  let fixture: ComponentFixture<OperationListCoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OperationListCoComponent]
    });
    fixture = TestBed.createComponent(OperationListCoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
