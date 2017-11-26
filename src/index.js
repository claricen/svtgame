import React from 'react';
import ReactDOM from 'react-dom';
import {compose, createStore} from 'redux';
import {Provider} from 'react-redux';
import './index.css';
import reducer from './reducer';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const createStoreDevTools = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore);
const store = createStoreDevTools(reducer);
store.dispatch({
  type: 'SET_STATE',
  state: {
    confidant: 0
  }
});

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>, 
	document.getElementById('root')
);
registerServiceWorker();
