import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { INCREMENT, DECREMENT, RESET } from './reducers/counter.reducer';

interface AppState {
  counter: number;
}

@Component({
  selector: 'sn-root',
  template: `
    <h1>Welcome to {{ title }}!</h1>
    <p>
      app Works!
    </p>
    <button id="increment" (click)="increment()">Increment</button>
		<div id="counter">Current Count: {{ counter$ | async }}</div>
		<button id="decrement" (click)="decrement()">Decrement</button>

		<button id="reset" (click)="reset()">Reset Counter</button>
  `,
  styles: []
})
export class AppComponent {
  title = 'sn';
  counter$: Observable<number>;

  constructor(private store: Store<AppState>) {
    this.counter$ = store.select('counter');
  }

  increment = () => this.store.dispatch({type: INCREMENT});
  decrement = () => this.store.dispatch({type: DECREMENT});
  reset = () => this.store.dispatch({type: RESET});
}
