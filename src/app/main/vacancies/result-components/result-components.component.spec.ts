import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultComponentsComponent } from './result-components.component';

describe('ResultComponentsComponent', () => {
  let component: ResultComponentsComponent;
  let fixture: ComponentFixture<ResultComponentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResultComponentsComponent]
    });
    fixture = TestBed.createComponent(ResultComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
