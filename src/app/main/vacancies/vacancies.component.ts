import { formatDate } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
    private activatedRoute: ActivatedRoute,
    private data: MockDataService,
  ) {
    this.activatedRoute.paramMap.subscribe({
      next: (res: any) => res.params.search ? (
        this.vacanciesList = data.vacancies.filter((dt: IVacancies) => dt.name.toLocaleLowerCase().includes(res.params.search.toLocaleLowerCase()))
      ) : this.vacanciesList = data.vacancies,
      error: err => console.log(err)
    })
  }

}
