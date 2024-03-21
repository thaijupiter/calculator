import { actions } from './App.js';

export default function DigitButton({ dispatch, digit }) {
	return ( 
		<button onClick={() => dispatch({ type: actions.add_digit, payload: { digit } })}>
	{digit}
	</button> 
	)
}