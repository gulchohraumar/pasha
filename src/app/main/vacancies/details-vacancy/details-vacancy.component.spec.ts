import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsVacancyComponent } from './details-vacancy.component';

describe('DetailsVacancyComponent', () => {
  let component: DetailsVacancyComponent;
  let fixture: ComponentFixture<DetailsVacancyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailsVacancyComponent]
    });
    fixture = TestBed.createComponent(DetailsVacancyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
