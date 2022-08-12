import {delay} from 'redux-saga/effects'

export function* sagaTest() {
    while (true){yield delay(1000)
        console.log("I'm a saga function")}

}


export function* count() {
    yield 1
    yield 2
    yield 3
    yield 4
    yield 5
}
