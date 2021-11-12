import { useCounter } from '../hooks/useCounter';

export const CounterWithHook = () => {

  const {counter, handleClick, counterElement} = useCounter()

  return (
    <>
      <h1>CounterEffect: {counter}</h1>
      <h2 ref={counterElement}>{counter}</h2>
      <button onClick={handleClick}>
        Aumentar
      </button>
    </> 
  ) 
}
