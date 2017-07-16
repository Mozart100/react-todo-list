import { applyMiddleware, compose, createStore } from 'redux';
import rootReducer from './reducers/index';
import  {composeWithDevTools} from 'redux-devtools-extension';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

let finalCreateStore =
    //  compose(applyMiddleware(thunk,logger))(createStore);
     composeWithDevTools(applyMiddleware(thunk,logger))(createStore);

export default function configureStore(
    initialState = { todos: [], user: {} }) {
    return finalCreateStore(rootReducer, initialState);
}

