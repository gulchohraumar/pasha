import { formatDate } from '@angular/common';
import { Component } from '@angular/core';
import { IVacancies } from 'src/app/models/IVacancies';
import { MockDataService } from 'src/app/services/mockData.service';

@Component({
  selector: 'app-vacancies',
  templateUrl: './vacancies.component.html',
  styleUrls: ['./vacancies.component.scss']
})
export class VacanciesComponent {
  vacanciesList: IVacancies[] = [];


  constructor(
    private data: MockDataService,
  ) {
    this.vacanciesList = data.vacancies;
  }

}
