import  React,  { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSort, faSortDown, faSortUp } from '@fortawesome/free-solid-svg-icons'

import { HashRouter as Router, Switch, Route, Link, useParams, useLocation } from "react-router-dom";
import './App.css';
import Navigation from './components/navbar.component';
import data from './Data';
import { Col, Container, Row } from 'react-bootstrap';
const App = () => {
	console.log(data);
	const [state, setState] = useState(data);
	
  return (
    <Router>
    <h1>
		<Navigation profileData = {state.profile}/>
    </h1>
    <Switch>
		
	<Route path="/details" component={DetailsComponent}>
          </Route>
		  <Route path="/profile" render={(props) => {return <ProfileDetails data= {data.profile}/>}}></Route>
          {/* <Route path="/profile/:userId" component={ProfileDetails}>
          </Route> */}
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

class types {
firstname: String;
lastname: String;
nam: Number
}

function HeaderComponent() {
  return <div><Header/><Profile/></div>
}

function DetailsComponent() {
	return <div>This is EarthQuake details component</div>
}

function Header() {
  return <Link to="/">Home</Link>;
}

function Profile() {
  return <Link to ="/profile/1234">Profile</Link>
}

function ProfileDetails({ data }) {
	console.log(data);
  return (<span>
	<Container fluid>
		  <Row className="mr-4 mt-4">
			  <Col className="text-center"><h4>Profile</h4></Col>
		  </Row>
		  <Row className="justify-content-md-center mt-4 ml-4">
			  <Col className="text-right pr-3" xs sm="2">
				  <img className="avatarImage text-right" src={data.avatarImage}></img>
			  </Col>

			  <Col xs lg="4">
				  <Row className="my-1">
					  <Col xs sm="2"><b>FirstName</b></Col>
					  <Col xs lg="2"><span>{data.firstName}</span></Col>
				  </Row>
				  <Row className="my-1">
					  <Col xs sm="2"><b>LastName</b></Col>
					  <Col xs lg="2">{data.lastName}</Col>
				  </Row>
				  <Row className="my-1">
					  <Col xs sm="2"><b>Phone</b></Col>
					  <Col xs lg="4">{data.phone}</Col>
				  </Row>
				  <Row className="my-1">
					  <Col xs sm="2"><b>Email</b></Col>
					  <Col xs lg="4">{data.email}</Col>
				  </Row>
				  <Row className="my-1">
					  <Col xs sm="2"><b>Bio</b></Col>
					  <Col xs lg="6">{data.bio}</Col>
				  </Row>
			  </Col>
		  </Row>
</Container>
  </span>);
}

const sortTypes = {
	up: {
		class: faSortUp,
		fn: (a: { net_worth: number; }, b: { net_worth: number; }) => a.net_worth - b.net_worth
	},
	down: {
		class: faSortDown,
		fn: (a: { net_worth: number; }, b: { net_worth: number; }) => b.net_worth - a.net_worth
	},
	default: {
		class: faSort,
		fn: (a: any, b: any) => a
	}
};



function Home() {
  const [state, setState] = useState({
    currentSort: 'default'
  });

  const onSortChange = () => {
		const { currentSort } = state;
		let nextSort: string;

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