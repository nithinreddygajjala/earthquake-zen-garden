import  React,  { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSort, faSortDown, faSortUp } from '@fortawesome/free-solid-svg-icons'
import { Property } from './models/data.model';
import { HashRouter as Router, Switch, Route, Link, useParams, useLocation } from "react-router-dom";
import './App.css';
import Navigation from './components/navbar.component';
import data from './Data';
import { Col, Container, Row } from 'react-bootstrap';
import dateTimeFormatter from './components/datetimeformatter.component';
const App = () => {
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
          <Route path="/" render={(props) => {return <Home data= {data.data}/>}}>
          </Route>
    </Switch>
    </Router>
  )
}

// const tableData = [
//   {
// 		name: 'Amancio Ortega',
// 		net_worth: 62.7
// 	},
// 	{
// 		name: 'Bernard Arnault',
// 		net_worth: 76
// 	},
// 	{
// 		name: 'Bill Gates',
// 		net_worth: 96.5
// 	},
// 	{
// 		name: 'Carlos Sim Helu',
// 		net_worth: 64
// 	},
// 	{
// 		name: 'Jeff Bezos',
// 		net_worth: 131
// 	},
// 	{
// 		name: 'Larry Ellison',
// 		net_worth: 58
// 	},
// 	{
// 		name: 'Larry Page',
// 		net_worth: 50.8
// 	},
// 	{
// 		name: 'Mark Zuckerberg',
// 		net_worth: 62.3
// 	},
// 	{
// 		name: 'Michael Bloomberg',
// 		net_worth: 55.5
// 	},
// 	{
// 		name: 'Warren Buffet',
// 		net_worth: 82.5
// 	}
// ];

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
		fn: (a, b) => a.properties.time - b.properties.time
	},
	down: {
		class: faSortDown,
		fn: (a, b) => b.properties.time - a.properties.time
	},
	default: {
		class: faSort,
		fn: (a: any, b: any) => a.properties.time
	}
};

const getSortMethod = (columnName, sortDirection) => {
	if(sortDirection == "up") {
		//return (a : Property, b: Property) => a.properties.time - b.properties.time

	} else if (sortDirection == "down") {

	} else {

	}
};

const sortColumns = (state) => {
	console.log(state);
	if(state.columnName == "titleColumn") {
		if(state.sortDirection == "up") {
			return (a, b) => a.properties.title.split('-')[1] - b.properties.title.split('-')[1] ;
		} else if(state.sortDirection == "down") {
			return (a, b) => b.properties.title.split('-')[1] - a.properties.title.split('-')[1] ;
		} else {
			return (a,b) => a.properties.title.split('-')[1]
		}
	} else if (state.columnName == "magnitudeColumn") {
		if(state.sortDirection == "up") {
			return (a, b) => a.properties.mag - b.properties.mag ;
		} else if(state.sortDirection == "down") {
			return (a, b) => b.properties.mag + a.properties.mag ;
		} else {
			return (a,b) => a.properties.mag;
		}
	} else {
		if(state.sortDirection == "up") {
			//return (a, b) => new Date(a.properties.time).toISOString() - new Date(b.properties.time).toISOString() ;
		} else if(state.sortDirection == "down") {
			return (a, b) => new Date(a.properties.time) < new Date(b.properties.time) ;
		} else {
			return (a,b) => new Date(a.properties.time);
		}
	}
};



function Home({data}) {
	let tableData = data.features;
  const [state, setState] = useState({
    columnName: null,
	sortDirection: 'default'
  });

  const onSortChange = (columnNameFromUI) => {
		let columnComponentState = state;

		if (columnComponentState.sortDirection === 'down') columnComponentState.sortDirection = 'up';
		else if (columnComponentState.sortDirection === 'up') columnComponentState.sortDirection = 'down';
		else if (columnComponentState.sortDirection === 'default') columnComponentState.sortDirection = 'down';
		columnComponentState.columnName = columnNameFromUI;

		setState({
			columnName: columnComponentState.columnName,
			sortDirection: columnComponentState.sortDirection 
  		});
	};

  return (
  <div>
    Grid for displaying the EarthQuake Data
	<Link to ="/details">Details</Link>
		  <table >
			  <thead>
				  <tr>
					  <th>Title
					  <button onClick={() => {onSortChange("title")}}>
							  <FontAwesomeIcon icon={state.columnName === "title" ? sortTypes[state.sortDirection].class : sortTypes["default"].class } />
						  </button>
					  </th>
					  <th>
						  Magnitude
                <button  onClick={() => {onSortChange("mag")}}>
				<FontAwesomeIcon icon={state.columnName === "mag" ? sortTypes[state.sortDirection].class : sortTypes["default"].class } />
						  </button>
					  </th>
					  <th>Time
					  <button  onClick={() => {onSortChange("time")}}>
					  <FontAwesomeIcon icon={state.columnName === "time" ? sortTypes[state.sortDirection].class : sortTypes["default"].class } />
						  </button>
					  </th>
				  </tr>
			  </thead>
			  <tbody>
				  {/* {[...tableData].sort(sortTypes[state.currentSort].fn).map(p => (
					  <tr>
						  <td>{p.name}</td>
						  <td>${p.net_worth}b</td>
					  </tr>
				  ))} */}
				  {[...tableData].sort(sortTypes[state.sortDirection].fn).map(p => (
					  <tr>
						  <td>{p.properties.title.split('-')[1]}</td>
						  <td>{p.properties.mag}</td>
						  <td>{dateTimeFormatter(p.properties.time)}</td>
					  </tr>
				  ))}
			  </tbody>
		  </table>
  </div>
  );
}

export default App