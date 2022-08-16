import * as entriesSaga from './entriesSaga';


export function initSaga(sagaMiddleware: any) {
	Object.values(entriesSaga).forEach(sagaMiddleware.run.bind(sagaMiddleware));
}
