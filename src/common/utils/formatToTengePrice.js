const formatToTengePrice = (price) => {
	if(!price && price !== 0) {
		return price;
	}

	const floatFormatted = price.toFixed(2);
	const stringedPrice = floatFormatted.toString();
	const priceInTenge = stringedPrice + " ₸";

	return priceInTenge;
};

export default formatToTengePrice;