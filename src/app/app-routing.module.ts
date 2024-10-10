import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VacanciesComponent } from './main/vacancies/vacancies.component';
import { MainComponent } from './main/main.component';
import { DetailsVacancyComponent } from './main/vacancies/details-vacancy/details-vacancy.component';

const routes: Routes = [
  { path: '', redirectTo: 'vacancies', pathMatch: 'full' },

  {
    path: 'vacancies', component: MainComponent, children: [
      { path: '', component: VacanciesComponent },
      { path: ':id', component: DetailsVacancyComponent },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
