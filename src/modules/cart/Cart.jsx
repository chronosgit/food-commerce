import { useContext } from "react";
import CartContext from "@common/contexts/CartContext";
import styles from "./cart.module.css";

const Cart = () => {
	
	const {isCartOpen, closeCart} = useContext(CartContext);

	const closedCartStyles = {
		transform: isCartOpen ? "translateX(0%)" : "translateX(150%)",
	};

	return (
		<div 
			className={styles.window}
			style={closedCartStyles}
		>
			<button onClick={closeCart}>Close</button>
		</div>
	);
};

export default Cart;