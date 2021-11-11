import { Counter } from "./bases/Counter";
import { CounterBy } from "./bases/CouterBy";


function App() {
  return (
    <>
      <Counter initialValue={ 15 }/>
      <CounterBy/>
    </>
  );  
}

export default App;
