
const handlePayment = () => {
	return new Promise(res => {
		// NOTE: payment logic

		setTimeout(() => {
			// NOTE: payment's been done
			res();
		}, 3000);
	});
};

export default handlePayment;