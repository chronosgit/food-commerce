import useCart from "@common/hooks/useCart";
import { createContext } from "react";

const CartContext = createContext({});

const CartContextProvider = ({children}) => {

	const cart = useCart();

	return (
		<CartContext.Provider value={cart}>
			{children}
		</CartContext.Provider>
	);
};

export {
	CartContextProvider,
};

export default CartContext;