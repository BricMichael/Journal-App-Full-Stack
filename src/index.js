import React from 'react';
import ReactDOM from 'react-dom';
import './styles/stilo.scss'
import JournalApp from './JournalApp';
import { Provider } from 'react-redux';
import { store } from './store/store';

ReactDOM.render( 
    <Provider store={ store }>
        <JournalApp />
    </Provider>,
document.getElementById('root'));


