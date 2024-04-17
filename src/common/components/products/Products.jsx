import Product from "@common/components/product/Product";
import styles from "./products.module.css";

const Products = ({products: prods}) => {

	if(!prods || !prods.length) {
    return;
  }

	return (
		<div className={styles.products}>
			{
				prods.map(prod => <Product key={prod.id} product={prod} />)
			}
		</div>
	);
};

export default Products;