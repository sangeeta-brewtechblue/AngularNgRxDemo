import { createAction } from "@ngrx/store";

export const  hungrySara = createAction('[hungry child1] Feed1');
export const thirstySara = createAction('[Thirsty child1] GiveWater1');
export const  hungryTom = createAction('[hungry child2] Feed2');
export const thirstyTom = createAction('[Thirsty child2] GiveWater2');
export const resetAct = createAction('[Resetting] reset');