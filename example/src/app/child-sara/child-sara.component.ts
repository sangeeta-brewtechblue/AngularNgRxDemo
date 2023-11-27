import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { hungrySara,  thirstySara } from '../babycare.actions';
import {BabycareStore} from '../store/babycare-store'
import { BabycareService } from '../babycare.service';

@Component({
  selector: 'app-child-sara',
  templateUrl: './child-sara.component.html',
  styleUrls: ['./child-sara.component.sass']
})
export class ChildSaraComponent {

  //hungry$:Observable<string>
  //thirsty$:Observable<string>

   //hungry=signal('I am hungry');

   constructor(private babycareService:BabycareService, private store:Store<{msg:string}>){
    // this.hungry$ = store.select('msg')
    // this.thirsty$ = store.select('msg')
    }

     readonly babycareStore = inject(BabycareStore);
  amHungry(){
     this.store.dispatch(hungrySara());
  }

  amThirsty(){
     this.store.dispatch(thirstySara())
  }
  
  amHungrySignal(){
 
     this.babycareStore.updateBaby('Sara','hungry');
 }

 amThirstySignal(){
   this.babycareStore.updateBaby('Sara','thirsty');
 }







}
