import React from "react";
import { Row, Col, Container } from "react-bootstrap";

const ProfileDetailsComponent = ({ data }) => {
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

export default ProfileDetailsComponent;

