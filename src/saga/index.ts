import {sagaTest} from "./saga.test";

export function initSaga(sagaMiddleware: { run: { bind: (value: any, index: number, array: any[]) => void; }; }) {
    Object.values(sagaTest()).forEach(sagaMiddleware.run.bind)
}
