import Toggler from "@common/components/toggler/Toggler";
import doExist from "@common/utils/doExist";
import styles from "./cart_order_option.module.css";

const CartOrderOption = ({option, isOn, onToggle}) => {

	if(!doExist(option, isOn, onToggle)) {
		return;
	}

	return (
		<div className={styles.row}>
			<p className={styles.option}>
				{option}
			</p>

			<Toggler 
				isOn={isOn}
				onToggle={onToggle}
			/>
		</div>
	);
};

export default CartOrderOption;