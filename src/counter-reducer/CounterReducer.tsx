import { useReducer } from "react"
import { doReset, doIncreaseBy } from "./actions/actions";
import { CounterState } from './interfaces/interfaces';
import { counterReducer } from './state/counterReducer';


const INITIAL_STATE:CounterState = {
  counter: 0,
  previous: 0,
  changes: 0
}

export const CounterReducer = () => {

  const [counterState, dispatch] = useReducer(counterReducer, INITIAL_STATE)

  const handleClick = (value:number) => {
    if (value !== 0) {
      dispatch(doIncreaseBy(value))
    } else {
      dispatch(doReset())
    }
  }

  return (
    <>
      <h1>CounterReducer: {counterState.counter}</h1>
      <h2>Changes: {counterState.changes}</h2>
      <h3>previous: {counterState.previous}</h3>
      <button onClick={() => handleClick(0)}>Reset</button>
      <button onClick={() => handleClick(1)}>+1</button>
      <button onClick={() => handleClick(5)}>+5</button>
      <button onClick={() => handleClick(10)}>+10</button>
      <pre>{JSON.stringify(counterState, null, 2)}</pre>
    </> 
  ) 
}
