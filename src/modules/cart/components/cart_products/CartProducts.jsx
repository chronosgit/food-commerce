import CartProduct from "../cart_product/CartProduct";
import isEmpty from "@common/utils/isEmpty";
import styles from "./cart_products.module.css";

const CartProducts = ({products: prods}) => {

	if(!Array.isArray(prods) || isEmpty(prods)) {
		return;
	}

	return (
		<div className={styles.products}>
			{
				prods.map((p, i) => <CartProduct key={i} product={p} />)
			}
		</div>
	);
};

export default CartProducts;