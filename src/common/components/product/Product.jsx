import formatToTengePrice from "@common/utils/formatToTengePrice";
import fallbackImage from "@assets/images/placeholder.png";
import styles from "./product.module.css";

const Product = ({product: prod}) => {

	const price = formatToTengePrice(prod.price);

	const imageOnError = (e) => {
		// NOTE: prevent infinite error loop
		e.target.onError = null;

		e.target.src = fallbackImage;
	};

	return (
		<div className={styles.product}>
			<img 
				src={prod.imageUrl} 
				alt="" 
				className={styles.product_img}
				onError={(e) => imageOnError(e)}/
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

				{/* TODO: put order related button here */}
			</div>
		</div>
	);
};

export default Product;