import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  constructor() { }

  activeCounter = 0;
  inactiveCounter = 0;

  incrementToInactive() {
    this.inactiveCounter++;
    console.log("Counter " + this.inactiveCounter);
  }

  incrementToActive() {
    this.activeCounter++;
    console.log("Counter " + this.activeCounter);
  }
}
