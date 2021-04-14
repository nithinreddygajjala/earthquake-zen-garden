import { faSort, faSortDown, faSortUp } from "@fortawesome/free-solid-svg-icons";

const sortTypes = {
	up: {
		class: faSortUp
	},
	down: {
		class: faSortDown
	},
	default: {
		class: faSort
	}
};

export default sortTypes;