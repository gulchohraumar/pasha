import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { VacanciesComponent } from './vacancies/vacancies.component';
import { AppRoutingModule } from '../app-routing.module';
import { DetailsVacancyComponent } from './vacancies/details-vacancy/details-vacancy.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';
import {MatButtonModule} from '@angular/material/button';
import {MatRadioModule} from '@angular/material/radio';
import { ResultComponentsComponent } from './vacancies/result-components/result-components.component';



@NgModule({
  declarations: [
    MainComponent,
    VacanciesComponent,
    DetailsVacancyComponent,
    ResultComponentsComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    MatButtonModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'az' }]
})
export class MainModule { }
