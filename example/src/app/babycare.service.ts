import { Injectable } from "@angular/core";
import { Observable, forkJoin, of } from "rxjs";
import { messages } from "./messages";

@Injectable({
    providedIn: 'root'
  })
  export class BabycareService {

      getByAction(baby:string,msg:string):Observable<string[]>{
            let msgs : messages = {m1: '' ,m2: ''}
           
            if(msg==='hungry')
             msgs.m1 = baby+'is hungry';
            else
             msgs.m2= baby+'is thirsty';
            let observArray : Array<Observable<string>> = [];
            observArray.push(of(baby));
            observArray.push(of(msgs.m1));
            observArray.push(of(msgs.m2));
            return(forkJoin(observArray));

      }
      


  
  }