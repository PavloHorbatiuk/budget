import { call, put, take } from 'redux-saga/effects';
import {
	ACTION_TYPE,
	populateEntries,
} from '../components/reducers/entires.reducer';
import axios, { AxiosResponse } from 'axios';

export function* entriesSaga() {
	yield take(ACTION_TYPE.GET_ALL_ENTRIES);
	const result: AxiosResponse = yield call(
		axios,
		'http://localhost:3001/entries'
	);
	yield put(populateEntries(result.data));
}
