import { NgModule } from '@angular/core';
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
  ]
})
export class MainModule { }
