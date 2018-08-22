import {createStore, applyMiddleware, combineReducers} from 'redux'
import thunk from 'redux-thunk'
import vakilReducer from './reducers/vakilReducer'
import {composeWithDevTools} from 'redux-devtools-extension'

const reducer = combineReducers({
    vakilsData: vakilReducer
})

export default createStore(
    reducer,
    composeWithDevTools(applyMiddleware(thunk))
);