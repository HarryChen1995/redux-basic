import {createSlice, PayloadAction, SliceCaseReducers } from '@reduxjs/toolkit';
import { identity } from "lodash";

export type CounterState = {
    count:number
}

const initialState:CounterState = {
    count:0
}

const counterSlice = createSlice<CounterState, SliceCaseReducers<CounterState>>(
    {
        name:"counter",
        initialState: initialState,
        reducers:{
                increment:identity,
                incrementSuccess:(state, {payload}:PayloadAction<number> )=>{
                    state.count +=payload
                }

        }
    }
)

export const counterReducer = counterSlice.reducer
export const {increment, incrementSuccess} = counterSlice.actions