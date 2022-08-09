import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import { EntriesReducer } from '../reducers/entires.reducer';

const reducer = combineReducers({
	entries: EntriesReducer,
});

export const store = createStore(reducer);
export type ReduxState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<ReduxState> = useSelector;
