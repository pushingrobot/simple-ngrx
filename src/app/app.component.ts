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
    <p>
      app Works!
    </p>
    <button (click)="increment()">Increment</button>
		<div>Current Count: {{ counter$ | async }}</div>
		<button (click)="decrement()">Decrement</button>

		<button (click)="reset()">Reset Counter</button>
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
