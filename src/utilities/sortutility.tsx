import { Feature } from "../models/datacontract.model";

const getSortMethod = (columnName, sortDirection) => {
	if (sortDirection === "up") {
		return (a: Feature, b: Feature) => {
			if (columnName === 'place')
				return a.properties[columnName].localeCompare(b.properties[columnName])
			else {
				return a.properties[columnName] - b.properties[columnName];
			}
		};
	} else if (sortDirection === "down") {
		return (a: Feature, b: Feature) => {
			if (columnName === 'place')
				return b.properties[columnName].localeCompare(a.properties[columnName])
			else {
				return b.properties[columnName] - a.properties[columnName];
			}
		}
	} else {
		return (a: Feature, b: Feature) => a.properties[columnName];
	}
};

export default getSortMethod;