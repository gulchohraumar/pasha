import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IVacancies } from 'src/app/models/IVacancies';
import { MockDataService } from 'src/app/services/mockData.service';


@Component({
  selector: 'app-details-vacancy',
  templateUrl: './details-vacancy.component.html',
  styleUrls: ['./details-vacancy.component.scss']
})
export class DetailsVacancyComponent {
  constructor(
    private data: MockDataService,
    private ActivatedRoute: ActivatedRoute,
  ) { }

  vacancyData!: IVacancies;

  ngOnInit(){
    this.ActivatedRoute.paramMap.subscribe(params => {
      let id = Number(params.get('id'));
      this.vacancyData = this.data.vacancies.filter((dt:any) => dt.id == id)[0];
    });
  }
}
