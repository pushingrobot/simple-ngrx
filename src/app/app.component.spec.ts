import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule, Store } from '@ngrx/store';
import * as fromCounter from './reducers/counter.reducer';

import { AppComponent } from './app.component';

describe('AppComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        StoreModule.forRoot({ counter: fromCounter.counterReducer }),
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();

  }));


  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'sn'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('sn');
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to sn!');
  }));

  it ('should increase the couter after clicking Incrememt', async(() => {
    const store: Store<fromCounter.State> = TestBed.get(Store);
    // spyOn(store, 'dispatch').and.callThrough();
    const fixture = TestBed.createComponent(AppComponent);
    const compiled = fixture.debugElement.nativeElement;
    const incrementEl = fixture.debugElement.query(By.css('#increment'));
    // const decrementEl = fixture.debugElement.query(By.css('#decrement'));
    expect(incrementEl).toBeDefined();
    if (incrementEl) {
      incrementEl.triggerEventHandler('click', null);
      fixture.detectChanges();
      expect(compiled.querySelector('#counter').textContent).toContain(': 1');
    }
  }));

  it ('should decrease the couter after clicking Decrement', async(() => {
    const store: Store<fromCounter.State> = TestBed.get(Store);
    // spyOn(store, 'dispatch').and.callThrough();
    const fixture = TestBed.createComponent(AppComponent);
    const compiled = fixture.debugElement.nativeElement;
    store.dispatch({type: fromCounter.INCREMENT});
    store.dispatch({type: fromCounter.INCREMENT});

    const decrementEl = fixture.debugElement.query(By.css('#decrement'));
    expect(decrementEl).toBeTruthy();
    if (decrementEl) {
      fixture.detectChanges();
      expect(compiled.querySelector('#counter').textContent).toContain(': 2');
      decrementEl.triggerEventHandler('click', null);
      fixture.detectChanges();
      expect(compiled.querySelector('#counter').textContent).toContain(': 1');
    }
  }));

  it ('should reset the counter when the reset button is pressed', async(() => {
    const store: Store<fromCounter.State> = TestBed.get(Store);
    // spyOn(store, 'dispatch').and.callThrough();
    const fixture = TestBed.createComponent(AppComponent);
    const compiled = fixture.debugElement.nativeElement;
    store.dispatch({type: fromCounter.INCREMENT});
    store.dispatch({type: fromCounter.INCREMENT});

    const resetEl = fixture.debugElement.query(By.css('#reset'));
    expect(resetEl).toBeTruthy();
    if (resetEl) {
      fixture.detectChanges();
      expect(compiled.querySelector('#counter').textContent).toContain(': 2');
      resetEl.triggerEventHandler('click', null);
      fixture.detectChanges();
      expect(compiled.querySelector('#counter').textContent).toContain(': 0');
    }
  }));
});
