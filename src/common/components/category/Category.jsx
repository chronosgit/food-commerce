import Products from "../products/Products";
import styles from "./category.module.css";

const Category = ({category: cat}) => {

	const {title, products: categoryProducts} = cat;

	return (
		<div className={styles.category}>
			<h2 className={styles.category_title}>
				{title}
			</h2>

			{
				categoryProducts && categoryProducts.length > 0 
				? <Products products={categoryProducts} />
				: <p className={styles.products_not_found}>Продукты пока не добавлены...</p>
			}
		</div>
	);
};

export default Category;