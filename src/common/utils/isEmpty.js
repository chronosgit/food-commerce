
const isEmpty = (arg) => {
	if(typeof arg !== "object") {
		return false;
	}

	if(Array.isArray(arg) && arg.length > 0) {
		return false;
	}

	const argObjVals = Object.values(arg);

	return argObjVals.length === 0;
};

export default isEmpty;