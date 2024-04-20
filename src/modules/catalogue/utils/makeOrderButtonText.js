import formatToTengePrice from "@common/utils/formatToTengePrice";

const makeOrderButtonText = (quantity, price) => {
	if(quantity === 0) {
		return "Добавьте товары в корзину"
	}

	return `${quantity} за ${formatToTengePrice(price)}`;
};

export default makeOrderButtonText;