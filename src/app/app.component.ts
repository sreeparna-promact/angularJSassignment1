import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`
  <div><h1>{{title}}</h1>
  <app-employee></app-employee>
  </div>
  `
})
export class AppComponent {
  title = 'employee';
}
