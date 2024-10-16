import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-result-components',
  templateUrl: './result-components.component.html',
  styleUrls: ['./result-components.component.scss']
})
export class ResultComponentsComponent {
  @Input() data: any;
}
