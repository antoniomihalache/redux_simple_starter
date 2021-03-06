import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from "../store";
import { BrowserRouter as Router } from 'react-router-dom';

const store = configureStore();

const App = () => (
	<Provider store={store}>
		<Router>
			<div><p>Redux simple starter boilerplate</p></div>
		</Router>
	</Provider>
);

export default App;
