import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import data from "../datasource";
import dateTimeFormatter from "../utilities/datetimeformatterutility";

interface IState {
    id: string;
}

class EarthQuakeDetailsComponent extends React.PureComponent<IState> {
    state: IState;
    constructor(props) {
        super(props);
        this.state = { id: props.match.params.id };
    }

    render() {
        let earthquakedetails = data.data.features.filter(item => item.id === this.state.id);
        return (
            <Container fluid>
                {
                    earthquakedetails.map(item => (
                        <React.Fragment key={item.id}>
                            <Row className="mt-4">
                                <Col className="text-center"><h4>{item.properties.title}</h4></Col>
                            </Row>
                            <Row className="justify-content-md-center mt-4 ml-4">
                                <Col xs md="3">
                                    <Row className="my-1">
                                        <Col xs sm="3"><b>Title</b></Col>
                                        <Col xs lg="9"><span>{item.properties.title}</span></Col>
                                    </Row>
                                    <Row className="my-1">
                                        <Col xs sm="3"><b>Magnitude</b></Col>
                                        <Col xs lg="9">{item.properties.mag}</Col>
                                    </Row>
                                    <Row className="my-1">
                                        <Col xs sm="3"><b>Time</b></Col>
                                        <Col xs lg="7">{dateTimeFormatter(item.properties.time)}</Col>
                                    </Row>
                                    <Row className="my-1">
                                        <Col xs sm="3"><b>Status</b></Col>
                                        <Col xs lg="4">{item.properties.status}</Col>
                                    </Row>
                                    <Row className="my-1">
                                        <Col xs sm="3"><b>Tsunami</b></Col>
                                        <Col xs lg="6">{item.properties.tsunami}</Col>
                                    </Row>
                                    <Row className="my-1">
                                        <Col xs sm="3"><b>Type</b></Col>
                                        <Col xs lg="6">{item.properties.type}</Col>
                                    </Row>
                                </Col>
                            </Row>
                        </React.Fragment>
                    ))
                }
            </Container>
        );
    }
}

export default EarthQuakeDetailsComponent;