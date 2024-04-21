import { useContext } from "react";
import BackButton from "@common/components/button_back/ButtonBack";
import CartHeading from "./components/cart_heading/CartHeading";
import CartProducts from "./components/cart_products/CartProducts";
import CartOrderOption from "./components/cart_order_option/CartOrderOption";
import CartContext from "@common/contexts/CartContext";
import styles from "./cart.module.css";
import formatToTengePrice from "@common/utils/formatToTengePrice";

const Cart = () => {
	
	const {
		cartProducts, isCartOpen, closeCart, totalPrice,
		needFurnace, toggleFurnaceOption
	} = useContext(CartContext);

	const closedCartStyles = {
		transform: isCartOpen ? "translateX(0%)" : "translateX(150%)",
	};

	return (
		<div className={styles.window} style={closedCartStyles}>
			<div className={styles.receipt}>
				<BackButton onClick={closeCart} />

				<CartHeading heading="Ваша корзина" />

				<CartProducts products={cartProducts} />

				<div className={styles.order_options}>
					<CartOrderOption 
						option="Нужна микроволновая печь?"
						isOn={needFurnace}
						onToggle={toggleFurnaceOption}
					/>
				</div>
			</div>

			<div className={styles.res}>
				<p className={styles.res_text}>ВСЕГО</p>

				<p className={styles.res_text}>{formatToTengePrice(totalPrice)}</p>
			</div>
		</div>
	);
};

export default Cart;