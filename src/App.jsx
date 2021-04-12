import React,  { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSort, faSortDown, faSortUp } from '@fortawesome/free-solid-svg-icons'

import { HashRouter as Router, Switch, Route, Link, useParams, useLocation } from "react-router-dom";
import './App.css';
const App = () => {
  return (
    <Router>
    <h1>
      <HeaderComponent/>
    </h1>
    <Switch>
		
	<Route path="/details" component={DetailsComponent}>
          </Route>
          <Route path="/profile/:userId" component={ProfileDetails}>
          </Route>
          <Route path="/" component={Home}>
          </Route>
    </Switch>
    </Router>
  )
}

const tableData = [
  {
		name: 'Amancio Ortega',
		net_worth: 62.7
	},
	{
		name: 'Bernard Arnault',
		net_worth: 76
	},
	{
		name: 'Bill Gates',
		net_worth: 96.5
	},
	{
		name: 'Carlos Sim Helu',
		net_worth: 64
	},
	{
		name: 'Jeff Bezos',
		net_worth: 131
	},
	{
		name: 'Larry Ellison',
		net_worth: 58
	},
	{
		name: 'Larry Page',
		net_worth: 50.8
	},
	{
		name: 'Mark Zuckerberg',
		net_worth: 62.3
	},
	{
		name: 'Michael Bloomberg',
		net_worth: 55.5
	},
	{
		name: 'Warren Buffet',
		net_worth: 82.5
	}
];


function HeaderComponent() {
  return <div><Header/><Profile/></div>
}

function DetailsComponent() {
	return <div>This is EarthQuake details component</div>
}

function Header() {
  return <Link to="/">Home</Link>;
}

function Profile({ match }) {
  return <Link to ="/profile/1234">Profile</Link>
}

function ProfileDetails({ match }) {
  let id = match ? match.params.userId : '';
  return <div>This is Profile Details {id}</div>
}

const sortTypes = {
	up: {
		class: faSortUp,
		fn: (a, b) => a.net_worth - b.net_worth
	},
	down: {
		class: faSortDown,
		fn: (a, b) => b.net_worth - a.net_worth
	},
	default: {
		class: faSort,
		fn: (a, b) => a
	}
};



function Home() {
  const [state, setState] = useState({
    currentSort: 'default'
  });

  const onSortChange = () => {
		const { currentSort } = state;
		let nextSort;

		if (currentSort === 'down') nextSort = 'up';
		else if (currentSort === 'up') nextSort = 'default';
		else if (currentSort === 'default') nextSort = 'down';

		setState({
			currentSort: nextSort
		});
	};

  return (
  <div>
    Grid for displaying the EarthQuake Data
	<Link to ="/details">Details</Link>
    <table >
					<thead>
						<tr>
							<th>Name</th>
							<th>
                Net Worth
                <button onClick={onSortChange}>
					<FontAwesomeIcon icon={sortTypes[state.currentSort].class} />
									
								</button>
                </th>
						</tr>
					</thead>
					<tbody>
					{[...tableData].sort(sortTypes[state.currentSort].fn).map(p => (
							<tr>
								<td>{p.name}</td>
								<td>${p.net_worth}b</td>
							</tr>
						))}
					</tbody>
				</table>
  </div>
  );
}

export default App