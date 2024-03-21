import { actions } from './App.js';

export default function OperationButton({ dispatch, operation }) {
	return ( 
		<button 
		onClick={() => dispatch({ type: actions.choose_op, payload: { operation } })}>
	{operation}</button> 
	)
}