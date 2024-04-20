import Categories from "@common/components/categories/Categories";
import Logo from "@common/components/logo/Logo";
import ButtonOrder from "@common/components/button_order/ButtonOrder";
import useCategories from "./hooks/useCategories";
import styles from "./catalogue.module.css";

const Catalogue = () => {

	// TODO: add cart states

	const {categories: cats} = useCategories();

	return (
		<div id="catalogue" className={styles.catalogue}>
			<div className={styles.logo_wrapper}>
				<Logo width="3.5rem" />
			</div>

			<div className={styles.button_order_wrapper}>
				<ButtonOrder text="Временный текст" />
			</div>

			<Categories categories={cats} />
		</div>	
	);
};

export default Catalogue;