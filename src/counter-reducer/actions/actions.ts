import { type } from 'os';
import { CounterAction } from '../interfaces/interfaces';


export const doReset = ():CounterAction => ({
  type: 'reset'
});

export const doIncreaseBy = (value:number):CounterAction => ({
  type: 'increaseBy',
  payload: {value}
});