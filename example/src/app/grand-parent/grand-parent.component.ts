import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { messages } from '../messages';
import { resetAct } from '../babycare.actions';

@Component({
  selector: 'app-grand-parent',
  templateUrl: './grand-parent.component.html',
  styleUrls: ['./grand-parent.component.scss']
})
export class GrandParentComponent {
  onHungry$:Observable<messages>
  onThirsty$:Observable<messages>
  constructor(private store:Store<{babycare:messages}>)
  {
    this.onHungry$ = store.select('babycare');
    this.onThirsty$ = store.select('babycare');
  }
 
  resetAll(){
     this.store.dispatch(resetAct());
  }



}
