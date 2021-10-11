import { put, takeLatest, takeEvery } from 'redux-saga/effects'
import axios from "axios"
import moment from "moment"


function* workerFetchData(action) {
    try
    {
        const result = yield axios({
            url: 'https://api.covid19api.com/summary',
            method: 'GET'
        })
        yield put({ type: "SET_DATA", payload: result.data })
        // console.log(result);

    } catch (err)
    {
        console.log(err);
    }

}


export function* watcherFetchData() {
    yield takeLatest("FETCH_DATA_SAGA", workerFetchData)
}

//------------------------filter
function* workerFilterData(action) {
    try
    {
        const result = yield axios({
            url: 'https://api.covid19api.com/world',
            method: 'GET',
            params: {
                from: moment(action.payload.dateFrom).format("YYYY/MM/DD hh:mm:ssz"),
                to: moment(action.payload.dateTo).format("YYYY/MM/DD hh:mm:ssz")
            }
        })
        yield put({ type: "SET_DATA_FILTER", payload: result.data })
        // console.log(result);

    } catch (err)
    {
        console.log(err);
    }

}


export function* watcherFilterData() {
    yield takeEvery("FILTER_DATA_SAGA", workerFilterData)
}