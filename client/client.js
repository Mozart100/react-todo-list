
import React from 'react';
import { render } from 'react-dom';
import App from '../components/App';
import configureStore from '../redux/store';
import {Provider} from 'react-redux';



let initialState = {
    todos: [{ id: 0, completed: false, text: 'iniatials todo list demo purposes.' }],
    user:{
       username:'ana',
       id:10
    }
};
let store = configureStore(initialState);


render(
    <Provider store = {store}>
         <App />
    </Provider>,
    document.getElementById('app')
)
