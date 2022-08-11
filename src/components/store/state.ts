import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import { EntriesReducer } from '../reducers/entires.reducer';
import { composeWithDevTools } from '@redux-devtools/extension';
import ModalsReducer from '../reducers/modal.reducer';

const reducer = combineReducers({
	entries: EntriesReducer,
	modals: ModalsReducer,
});

export const store = createStore(reducer, composeWithDevTools());
export type ReduxState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<ReduxState> = useSelector;
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
