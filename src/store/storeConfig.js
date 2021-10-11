import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import covidDataReducer from './reducer/dataReducer'
import modalReducer from './reducer/modalReducer'
import {rootSaga} from './rootSaga'


const rootReducer = combineReducers({
    covidDataReducer,
    modalReducer
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const sagaMiddleware = createSagaMiddleware()


export const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(sagaMiddleware))
)

sagaMiddleware.run(rootSaga)

