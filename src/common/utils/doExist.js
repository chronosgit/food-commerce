
const doExist = (...args) => {
	const allExist = args.every(arg => {
		if(arg !== null && arg !== undefined) {
			return true;
		}

		return false;
	});

	return allExist;
};

export default doExist;