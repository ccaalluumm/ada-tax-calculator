import React, { ReactElement } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

import './App.css';
import Navbar from './components/Navbar';
import Faq from './pages/faq/Faq';
import Home from './pages/home/Home';


const App = (): ReactElement => {

	return (
		<Router>
			<Navbar />
			<div className="App">
				<Switch>
					<Route
						exact
						path="/"
						render={() => {
							return (
								<Redirect to="/calculator" />
							);
						}}
					/>
					<Route exact path="/calculator">
						<Home />
					</Route>
					<Route path="/faq">
						<Faq />
					</Route>
				</Switch>
			</div>
		</Router>
	);
};

export default App;
