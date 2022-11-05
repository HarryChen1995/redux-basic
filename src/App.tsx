import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import './App.css';
import store, { persistor } from './store';
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from './store/types';
import { increment } from './store/state/counterSlice';


function Container() {
  const count: number = useSelector((state: RootState) => state.counter.count)
  const dispatch = useDispatch();
  return (<div className="App">
    <button onClick={() => dispatch(increment(12))}>increment</button>
    <span>{count}</span>
  </div>)
}

function App() {


  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Container />
      </PersistGate>
    </Provider>
  );
}

export default App;
