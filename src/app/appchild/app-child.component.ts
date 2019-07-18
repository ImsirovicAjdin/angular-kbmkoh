import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'app-child',
  template: `
    <hr>
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