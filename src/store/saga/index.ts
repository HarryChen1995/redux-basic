
import { incrementWatcher } from './counterSaga';
import {  call, spawn, all  } from 'redux-saga/effects';

export default function* rootSaga() {
    const sagas = [
            incrementWatcher
    ];
  
    yield all(
      sagas.map(saga =>
        spawn(function* () {
          while (true) {
            try {
              yield call(saga);
              break;
            } catch (e) {
              console.error(e);
            }
          }
        })
      )
    );
  }