import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practicing-directive',
  templateUrl: './practicing-directive.component.html',
  styleUrls: ['./practicing-directive.component.scss'],
  styles: [`
        .details{
            color: white;
        }
    `]
})
export class PracticingDirectiveComponent implements OnInit {
  toggle = true;
  counter = 0;
  buttonClicks = [];
  constructor() { }

  ngOnInit() {

  }
  onButtonClick() {
    this.toggle = !this.toggle;
    this.buttonClicks.push(new Date());
    return this.toggle;
  }
  getStyle() {
      if (this.counter >= 5) {
        return 'blue';
      } else {
        return 'white';
      }
  }
}

