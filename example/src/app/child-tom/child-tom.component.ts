import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { hungryTom, thirstyTom } from '../babycare.actions';
@Component({
  selector: 'app-child-tom',
  templateUrl: './child-tom.component.html',
  styleUrls: ['./child-tom.component.sass']
})
export class ChildTomComponent {
  hungry$:Observable<String>
   thirsty$:Observable<String>

   constructor(private store:Store<{msg:string}>){
     this.hungry$ = store.select('msg')
     this.thirsty$ = store.select('msg')
    }

  amHungry(){
     this.store.dispatch(hungryTom());
  }

  amThirsty(){
     this.store.dispatch(thirstyTom())
  }


}
