import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { VacanciesComponent } from './vacancies/vacancies.component';
import { AppRoutingModule } from '../app-routing.module';
import { DetailsVacancyComponent } from './vacancies/details-vacancy/details-vacancy.component';


@NgModule({
  declarations: [
    MainComponent,
    VacanciesComponent,
    DetailsVacancyComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'az' }]
})
export class MainModule { }
