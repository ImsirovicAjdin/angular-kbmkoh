import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div>
      Parent Component
    </div>
    <app-child *ngFor="let vehicle of vehicles" [car]="vehicle"></app-child>
  `
})
export class AppComponent  {
  name = 'Angular';

  vehicles = [
    {
      id: 1,
      make: 'Toyota',
      color: {
        body: 'red',
        interior: 'gray'
      }
    },
    {
      id: 2,
      make: 'Subaru',
      color: {
        body: 'red',
        interior: 'gray'
      }
    },
    {
      id: 3, 
      make: 'Subaru',
      old: "yes"
    },
    {
      id: 4,
      make: 'Subaru',
      color: {
        body: 'yellow',
        interior: 'gray'
      }
    }
  ]
}
