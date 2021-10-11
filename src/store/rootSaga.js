import { all } from '@redux-saga/core/effects';
import { watcherFetchData, watcherFilterData } from '../store/actions/tableActions'

export function* rootSaga() {
    yield all([
        watcherFetchData(),
        watcherFilterData()
    ]) 
} 