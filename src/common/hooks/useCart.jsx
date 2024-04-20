import { useState } from "react";

const useCart = () => {

	const [cartProducts, setCardProducts] = useState([]);

	const addToCart = (product) => {
		console.log("Added: ", product);
	};

	const removeFromCart = (productId) => {
		console.log("Removed by id: ", productId);
	};

	return {
		cartProducts, addToCart, removeFromCart,
	};
};

export default useCart;