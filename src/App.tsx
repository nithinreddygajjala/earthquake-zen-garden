import './App.css';
import data from './datasource';
import React, { useState } from 'react';
import Navigation from './components/navbar.component';
import HomeComponent from './components/home.component';
import ProfileDetailsComponent from './components/profiledetails.component';
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import EarthQuakeDetailsComponent from './components/earthquakedetails.component';

const App = () => {
	const [state, setState] = useState(data);
	return (
		<Router>
			<h1>
				<Navigation Data={state} />
			</h1>
			<Switch>
				<Route path="/details/:id" component={EarthQuakeDetailsComponent}>
				</Route>
				<Route path="/profile" render={(props) => { return <ProfileDetailsComponent data={data.profile} /> }}></Route>
				<Route path="/" render={(props) => { return <HomeComponent data={data.data} /> }}>
				</Route>
			</Switch>
		</Router>
	)
}

export default App