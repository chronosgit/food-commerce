import { useContext } from "react";
import Categories from "@common/components/categories/Categories";
import Logo from "@common/components/logo/Logo";
import ButtonOrder from "@common/components/button_order/ButtonOrder";
import CartContext from "@common/contexts/CartContext";
import mockCategories from "./api/mockCategories";
import makeOrderButtonText from "./utils/makeOrderButtonText";
import styles from "./catalogue.module.css";

const Catalogue = () => {

	const {
		totalPrice: totalCartProdsPrice,
		cartProducts, openCart: openCartWindow,
	} = useContext(CartContext);
	
	const orderButtonText = makeOrderButtonText(
		cartProducts.length, totalCartProdsPrice
	);

	const canOrder = Boolean(cartProducts.length);

	return (
		<div id="catalogue" className={styles.catalogue}>
			<div className={styles.logo_wrapper}>
				<Logo width="3.5rem" />
			</div>

			<Categories categories={mockCategories} />

			<div className={styles.button_order_wrapper}>
				<ButtonOrder 
					content={orderButtonText} 
					isDisabled={!canOrder} 
					onClick={openCartWindow}
				/>
			</div>
		</div>	
	);
};

export default Catalogue;