import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './stores';
import App from './components/app';

//import './styles/app.css';
import './styles/styles.scss';
import './styles/bootstrap.min.css';
import './styles/bootstrap-theme.min.css';

const store = configureStore();

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);
