
import {takeEvery, select, put } from "redux-saga/effects";
import { RootState } from "../types";
import { incrementSuccess } from "../state/counterSlice";
export function* incrementWatcher(){
    yield takeEvery("counter/increment", incrementHanlder )
}

export function* incrementHanlder(){
    const count:number = yield select((state:RootState)=>state.counter.count)
    console.log("good")
    yield put(incrementSuccess(12));
}