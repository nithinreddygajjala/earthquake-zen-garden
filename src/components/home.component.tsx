import { Link } from "react-router-dom";
import React, { useState } from "react";
import sortTypes from "../constants/constants";
import getSortMethod from "../utilities/sortutility";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import dateTimeFormatter from "../utilities/datetimeformatterutility";

const HomeComponent = ({ data }) => {
	let tableData = data.features;
	{/* Initially in state, column is set to null and sortDirection is set to default. They get populated when user clicks on sort icons on columns */}
	const [state, setState] = useState({
		columnName: null,
		sortDirection: 'default'
	});

	const onSortChange = (columnNameFromGrid) => {
		let columnComponentState = state;

		if (columnComponentState.sortDirection === 'down') columnComponentState.sortDirection = 'up';
		else if (columnComponentState.sortDirection === 'up') columnComponentState.sortDirection = 'down';
		else if (columnComponentState.sortDirection === 'default') columnComponentState.sortDirection = 'down';

		columnComponentState.columnName = columnNameFromGrid;

		{/*The state will be updated with new columnName and SortDirection Properties with setState Hook*/ }
		setState({
			columnName: columnComponentState.columnName,
			sortDirection: columnComponentState.sortDirection
		});
	};

	return (
		<Container fluid>
			<Row className="mr-4 mt-4">
				<Col className="text-center"><h5 className="textColor">{data.metadata.title}</h5></Col>
			</Row>
			<Row className="justify-content-md-center mt-2 ml-4">
				<Col className="text-right pr-3" xs sm="4">
					<table >
						<thead>
							<tr>
								<th className="text-center p-3">Title
									<button className="ml-2" onClick={() => { onSortChange("place") }}>
										<FontAwesomeIcon icon={state.columnName === "place" ? sortTypes[state.sortDirection].class : sortTypes["default"].class} />
									</button>
								</th>
								<th className="text-center p-3">
									Magnitude
                					<button className="ml-2" onClick={() => { onSortChange("mag") }}>
										<FontAwesomeIcon icon={state.columnName === "mag" ? sortTypes[state.sortDirection].class : sortTypes["default"].class} />
									</button>
								</th>
								<th className="text-center p-3">Time
					  				<button className="ml-2" onClick={() => { onSortChange("time") }}>
										<FontAwesomeIcon icon={state.columnName === "time" ? sortTypes[state.sortDirection].class : sortTypes["default"].class} />
									</button>
								</th>
							</tr>
						</thead>
						<tbody>
							{/* getSortMethod returns sort callback to be used on specified column */}
							{tableData.sort(getSortMethod(state.columnName, state.sortDirection)).map(item => (
								<tr key={item.id}>
									<td className="pr-2 py-1"><Link to={`/details/${item.id}`}>{item.properties.place}</Link></td>
									<td className="pr-4 py-1 text-center">{item.properties.mag}</td>
									{/*DateTimeFormatter used for formatting date to  month  day year hours minutes amOrPm format */}
									<td className="pl-4 py-1">{dateTimeFormatter(item.properties.time)}</td>
								</tr>
							))}
						</tbody>
					</table>
				</Col>
			</Row>
		</Container>
	);
}

export default HomeComponent;
