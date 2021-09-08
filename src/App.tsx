import React, { ReactElement } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import Home from './pages/home/Home';


const App = (): ReactElement => {

	return (
		<Router>
			<div className="App">
				<Switch>
					<Route path="/">
						<Home />
					</Route>
				</Switch>
			</div>
		</Router>
	);
};

export default App;
