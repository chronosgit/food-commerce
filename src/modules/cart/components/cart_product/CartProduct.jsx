import formatToTengePrice from "@common/utils/formatToTengePrice";
import styles from "./cart_product.module.css";

const CartProduct = ({product: prod}) => {

	const {name, price, type} = prod;

	return (
		<div className={styles.product}>
			<div className={`${styles.product_row} ${styles.product_heading}`}>
				<p className={styles.product_name}>
					{name || "Продукт"}
				</p>

				<p className={styles.product_price}>
					{formatToTengePrice(price) || "Цена неизвестна"}
				</p>
			</div>

			<div className={styles.product_row}>
				<p className={styles.product_type}>
					{type || "Тип"}
				</p>
			</div>
		</div>
	);
};

export default CartProduct;