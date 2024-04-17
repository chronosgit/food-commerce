import Categories from "@common/components/categories/Categories";
import Logo from "@common/components/logo/Logo";
import categories from "./api/mockCategories";
import styles from "./catalogue.module.css";

const Catalogue = () => {

	return (
		<div id="catalogue" className={styles.catalogue}>
			<div className={styles.logo_wrapper}>
				<Logo width="3.5rem" />
			</div>

			<Categories categories={categories} />
		</div>	
	);
};

export default Catalogue;