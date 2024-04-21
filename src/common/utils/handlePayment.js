
const handlePayment = () => {
	return new Promise(res => {
		console.log("Payment has started.");
		console.log("Payment is being processed.");

		setTimeout(() => {
			console.log("Payment is done!");
			res();
		}, 3000);
	});
};

export default handlePayment;