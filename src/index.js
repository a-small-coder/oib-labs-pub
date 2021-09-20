import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/store';
import { Provider } from 'react-redux';
import { CookiesProvider } from "react-cookie";
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
export let rerenderEntireTree = () => {
	ReactDOM.render(
		<React.StrictMode>
			<CookiesProvider>
        <Provider store={store}>
          <App/>
        </Provider>
			</CookiesProvider>
		</React.StrictMode>,
		document.getElementById('root')
	  );
	  
}

rerenderEntireTree();
store.subscribe(rerenderEntireTree);
reportWebVitals();
