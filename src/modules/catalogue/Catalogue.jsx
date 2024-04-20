import Categories from "@common/components/categories/Categories";
import Logo from "@common/components/logo/Logo";
import ButtonOrder from "@common/components/button_order/ButtonOrder";
import mockCategories from "./api/mockCategories";
import styles from "./catalogue.module.css";

const Catalogue = () => {

	return (
		<div id="catalogue" className={styles.catalogue}>
			<div className={styles.logo_wrapper}>
				<Logo width="3.5rem" />
			</div>

			<div className={styles.button_order_wrapper}>
				<ButtonOrder text="Временный текст" />
			</div>

			<Categories categories={mockCategories} />
		</div>	
	);
};

export default Catalogue;