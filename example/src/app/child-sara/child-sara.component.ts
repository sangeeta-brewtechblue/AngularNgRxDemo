import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { hungrySara,  thirstySara } from '../babycare.actions';

@Component({
  selector: 'app-child-sara',
  templateUrl: './child-sara.component.html',
  styleUrls: ['./child-sara.component.sass']
})
export class ChildSaraComponent {
  hungry$:Observable<string>
  thirsty$:Observable<string>

   constructor(private store:Store<{msg:string}>){
     this.hungry$ = store.select('msg')
     this.thirsty$ = store.select('msg')
    }

  amHungry(){
     this.store.dispatch(hungrySara());
  }

  amThirsty(){
     this.store.dispatch(thirstySara())
  }


}
