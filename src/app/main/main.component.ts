import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  constructor(private router: Router){}
  search: string = ''

  handleKeyUp(e: any) {
    if (e.keyCode === 13) {
      this.router.navigate(['./vacancies', { search: this.search}]);
    }
  }

}
