import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import AppContainer from './container/AppContainer';
import configureStore from './store/configureStore';

const { store } = configureStore();

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <AppContainer />
                <div className="overlay__wrapper"></div>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root'),
);