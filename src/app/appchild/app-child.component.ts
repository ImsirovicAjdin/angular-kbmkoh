import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'app-child',
  template: `
        <div style="display: inline-block; overflow: auto; height: 200px; width: 140px; background: plum; color: white; margin:10px; padding: 20px;">
            Child component
            <div>ID: {{car?.id}}</div>
            <div>MAKE: {{car?.make}}</div>
            <div *ngIf="car?.color">
                <div>BODY COLOR: {{car?.color?.body}}</div>
                <div>INTERIOR COLOR: {{car?.color?.interior}}</div>
            </div>
            <div *ngIf="car?.old">OLD: {{car?.old}}</div>
        </div>
  `
})
export class AppChildComponent implements OnInit {
  @Input() car;

  logCars() {
    console.log(this.car);
  }

  ngOnInit() {
    this.logCars();
  }
}