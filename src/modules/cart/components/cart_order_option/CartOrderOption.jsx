import doExist from "@common/utils/doExist";
import styles from "./cart_order_option.module.css";

const CartOrderOption = ({option, isToggle, onToggle}) => {

	if(!doExist(option, isToggle, onToggle)) {
		return;
	}

	return (
		<div className={styles.row}>
			<p className={styles.option}>

			</p>

			
		</div>
	);
};

export default CartOrderOption;