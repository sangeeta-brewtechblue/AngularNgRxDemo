import { patchState, signalStore, withHooks, withMethods, withState } from "@ngrx/signals";
import {  messages } from "../messages";
import { BabycareService } from "../babycare.service";
import { inject } from "@angular/core";
import { debounceTime, distinctUntilChanged, pipe, switchMap, tap } from "rxjs";
import { tapResponse } from "@ngrx/operators";

type State= {twoMessages:messages;baby:string;isLoading:boolean}
const initialState:State={
    twoMessages:{m1:'All good',m2:'All good'},
    baby:'',
    isLoading:false
}

export const BabycareStore = signalStore(
    {providedIn:'root'},
    withState(initialState),
    withMethods((store,babycareService=inject(BabycareService))=>({
          
       updateBaby(babyName:string,msg:string){        
        let updateMessages : messages = {m1: '' ,m2: ''}           
        if(msg=='hungry')
        updateMessages.m1 = 'is hungry';
        if(msg=='thirsty')
        updateMessages.m2= 'is thirsty';
         patchState(store,{baby: babyName},{twoMessages:{m1:updateMessages.m1,m2:updateMessages.m2}})
       },

       
    // loadReactively:rxMethod<string>(
    //     pipe(
    //         debounceTime(300),
    //         distinctUntilChanged(),
    //         tap(() => patchState(store, { isLoading: true })),
    //            switchMap((baby) =>
    //             babycareService.getByAction(baby,"").pipe(
    //             tapResponse({
    //               next: (baby) => {
    //                console.log("baby",baby);
    //                },
    //               error: console.error,
    //               finalize: () => patchState(store, { isLoading: false }),
    //             }),


    // )
        
    })),
    // withHooks({
    //     onInit({ loadReactively, baby }) {
    //       console.log("on init"+baby)
    //      loadReactively(baby);
    //       //loadAll();
          
    //     },
    // }),
);