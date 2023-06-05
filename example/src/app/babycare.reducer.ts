import { createReducer, on } from "@ngrx/store";
import { hungrySara, hungryTom, resetAct, thirstySara, thirstyTom } from "./babycare.actions";

export const initialState = {m1:'All Good',
m2:'All Good'};
export const babycareReducer = createReducer(
    initialState,
    on(hungrySara,(state)=>state= {m1: "Sara is hungry..Grandma gave some chocolates to her ",m2:state.m2}),
    on(thirstySara,(state)=>state={m1:state.m1,m2:"Sara is thirsty..Grandma gave her water to drink"}) ,
    on(hungryTom,(state)=>state= {m1: "Tom is hungry..Grandma gave some chocolates to him ",m2:state.m2}),
    on(thirstyTom,(state)=>state={m1:state.m1,m2:"Tom is thirsty..Grandma gave him water to drink"}) ,
    on(resetAct,(state)=>state={m1:'All Good',m2:'All Good'})
);