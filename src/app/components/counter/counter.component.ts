import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {
  countervalue = signal(0);

  addFunc() {
    this.countervalue.set(this.countervalue() + 1)
  }

  substractFunc() {
    this.countervalue.set(this.countervalue() - 1);
  }

}
