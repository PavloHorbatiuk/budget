import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { EntriesReducer } from '../reducers/entires.reducer';
import { composeWithDevTools } from '@redux-devtools/extension';
import ModalsReducer from '../reducers/modal.reducer';
import createSagaMiddleware from 'redux-saga';
import { initSaga } from '../../saga';

export const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];
const reducer = combineReducers({
	entries: EntriesReducer,
	modals: ModalsReducer,
});

export const store = createStore(
	reducer,
	composeWithDevTools(applyMiddleware(...middleware))
);
export type ReduxState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<ReduxState> = useSelector;

initSaga(sagaMiddleware);
