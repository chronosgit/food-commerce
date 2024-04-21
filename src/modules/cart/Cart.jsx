import { useContext, useState } from "react";
import { ClipLoader } from "react-spinners";
import BackButton from "@common/components/button_back/ButtonBack";
import CartHeading from "./components/cart_heading/CartHeading";
import CartProducts from "./components/cart_products/CartProducts";
import CartOrderOption from "./components/cart_order_option/CartOrderOption";
import ButtonOrder from "@common/components/button_order/ButtonOrder";
import CartContext from "@common/contexts/CartContext";
import ToasterContext from "@common/contexts/ToasterContext";
import handlePayment from "@common/utils/handlePayment";
import formatToTengePrice from "@common/utils/formatToTengePrice";
import styles from "./cart.module.css";

const Cart = () => {
	
	const {
		cartProducts, isCartOpen, closeCart, totalPrice,
		needFurnace, toggleFurnaceOption
	} = useContext(CartContext);

	const {callToaster} = useContext(ToasterContext);

	const [isPaymentProcessed, setPaymentProcessed] = useState(false);

	const closedCartStyles = {
		transform: isCartOpen ? "translateX(0%)" : "translateX(150%)",
	};

	const onOrderButton = async () => {
		setPaymentProcessed(true);

		await handlePayment();

		setPaymentProcessed(false);
	
		callToaster("Оплата успешна!");

		setTimeout(() => closeCart(), 2000);
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

			<div className={styles.button_order_wrapper}>
				<ButtonOrder 
					content={
						isPaymentProcessed 
						? <ClipLoader 
								size={14} 
								color="white"
							/> 
						: <p>Оплатить через kaspi.kz</p>
					} 
					onClick={onOrderButton}
				/>
			</div>
		</div>
	);
};

export default Cart;