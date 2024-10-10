import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { VacanciesComponent } from './vacancies/vacancies.component';
import { AppRoutingModule } from '../app-routing.module';


@NgModule({
  declarations: [
    MainComponent,
    VacanciesComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'az' }]
})
export class MainModule { }
