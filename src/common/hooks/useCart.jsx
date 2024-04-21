import { useState } from "react";

const useCart = () => {

	const [cartProducts, setCardProducts] = useState([]);
	const [totalPrice, setTotalPrice] = useState(0);
	const [isCartOpen, setCartOpen] = useState(false);
	const [needFurnace, setNeedFurnace] = useState(false);

	const addToCart = (product) => {
		setTotalPrice(prev => prev + product.price);

		setCardProducts(prev => {
			return [
				...prev,
				product,
			];
		});
	};

	const removeFromCart = (productId, productPrice) => {
		let isOneMarkedFalse = false;

		const updatedCartProds = cartProducts.filter(cp => {
			if(!isOneMarkedFalse && cp.id === productId) {
				isOneMarkedFalse = true;
				return false;
			}

			return true;
		});

		setTotalPrice(prev => prev - productPrice);
		setCardProducts(updatedCartProds);
	};

	const openCart = () => {
		setCartOpen(true);
	};

	const closeCart = () => {
		setCartOpen(false);
	};

	const toggleFurnaceOption = () => {
		setNeedFurnace(p => !p);
	};

	return {
		cartProducts, totalPrice,
		addToCart, removeFromCart,
		isCartOpen, openCart, closeCart,
		needFurnace, toggleFurnaceOption
	};
};

export default useCart;