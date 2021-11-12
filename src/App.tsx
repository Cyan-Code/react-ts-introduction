//import { Counter } from "./bases/Counter";
//import { CounterBy } from "./bases/CouterBy";
//import { CounterEffect } from "./bases/CounterEffect";
import { CounterWithHook } from "./bases/CounterWithHook";


function App() {
  return (
    <>
      {/* <Counter initialValue={ 15 }/>
      <CounterBy/>
      <CounterEffect/>
      */}
      <CounterWithHook />
    </>
  );  
}

export default App;
