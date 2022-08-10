import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import { EntriesReducer } from '../reducers/entires.reducer';
import { composeWithDevTools } from '@redux-devtools/extension';

const reducer = combineReducers({
	entries: EntriesReducer,
});

export const store = createStore(reducer, composeWithDevTools());
export type ReduxState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<ReduxState> = useSelector;
