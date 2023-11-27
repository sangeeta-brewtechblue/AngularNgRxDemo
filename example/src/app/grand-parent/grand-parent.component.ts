import { Component ,inject} from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { messages } from '../messages';
import { resetAct } from '../babycare.actions';
import { BabycareStore } from '../store/babycare-store';

@Component({
  selector: 'app-grand-parent',
  templateUrl: './grand-parent.component.html',
  styleUrls: ['./grand-parent.component.scss']
})
export class GrandParentComponent {

  onHungry$:Observable<messages>
  onThirsty$:Observable<messages>
 
  readonly babycareStore = inject(BabycareStore)

  // babyName= this.babycareStore.baby();
  // message1 = this.babycareStore.twoMessages.m1();
  // message2=  this.babycareStore.twoMessages.m2();

  constructor(private store:Store<{babycare:messages}>)
  {
    this.onHungry$ = store.select('babycare');
    this.onThirsty$ = store.select('babycare');
  }
 
  resetAll(){
     this.store.dispatch(resetAct());
  }



}
