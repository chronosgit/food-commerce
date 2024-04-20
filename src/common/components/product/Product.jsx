import { useContext, useState } from "react";
import formatToTengePrice from "@common/utils/formatToTengePrice";
import QuantitySelector from "@common/components/quantity_selector/QuantitySelector";
import CartContext from "@common/contexts/CartContext";
import imageOnError from "@common/utils/imageOnError";
import fallbackImage from "@assets/images/placeholder.png";
import styles from "./product.module.css";

const Product = ({product: prod}) => {

	const {
		addToCart, removeFromCart,
	} = useContext(CartContext);

	const [pickedQuantity, setPickedQuantity] = useState(0);

	const price = formatToTengePrice(prod.price);

	const addProduct = () => {
		setPickedQuantity(prev => prev + 1);
		addToCart(prod);
	};

	const removeProduct = () => {
		if(pickedQuantity === 0) {
			return;
		}

		setPickedQuantity(prev => prev - 1);
		removeFromCart(prod.id);
	};

	return (
		<div className={styles.product}>
			<img 
				src={prod.imageUrl} 
				alt="" 
				className={styles.product_img}
				onError={(e) => imageOnError(e, fallbackImage)}/
			>

			<div className={styles.product_content}>
				<div className={styles.product_heading}>
					<h3 className={styles.product_name}>
						{prod.name || "Продукт"}
					</h3>

					<p className={styles.product_price}>
						{price || "Цена неизвестна"}
					</p>
				</div>

				<p className={styles.product_type}>
					{prod.desc || "Тип"}
				</p>

				<div className={styles.quantity_selector_wrapper}>
					<QuantitySelector 
						quantity={pickedQuantity}
						isMinusDisabled={pickedQuantity === 0} 
						onPlus={addProduct}
						onMinus={removeProduct}
					/>
				</div>
			</div>
		</div>
	);
};

export default Product;