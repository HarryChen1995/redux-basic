import { combineReducers, configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './saga';
import { counterReducer } from './state/counterSlice';
import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';
import { Persistor } from 'redux-persist';
import persistStore from 'redux-persist/es/persistStore';
const persistConfig = {
    key: 'root',
    storage,
  }


const rootReducer = combineReducers({ 
    counter: counterReducer,

  })
  const sagaMiddleware = createSagaMiddleware();

  const persistedReducer = persistReducer(persistConfig, rootReducer)
  
  const store = configureStore({
    devTools:true,
    reducer: persistedReducer,
    middleware:[sagaMiddleware]
  })

  sagaMiddleware.run(rootSaga)

export default store;
export const persistor: Persistor = persistStore(store);