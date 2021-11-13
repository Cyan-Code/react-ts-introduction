import { useCounter } from '../hooks/useCounter';

export const CounterWithHook = () => {

  const {counter, handleClick, elementToAnimate} = useCounter({
    maxCount: 15
  });

  return (
    <>
      <h1>CounterEffect: {counter}</h1>
      <h2 ref={elementToAnimate}>{counter}</h2>
      <button onClick={handleClick}>
        Aumentar
      </button>
    </> 
  ) 
}
