import styles from "./quantity_selector.module.css";

const QuantitySelector = () => {

	return (
		<div className={styles.wrapper}>
			<button className={styles.controller}>
				<p className={styles.controller_btn}>-</p>
			</button>

			<p className={styles.quantity}>-1</p>

			<button className={styles.controller}>
				<p className={styles.controller_btn}>+</p>
			</button>
		</div>
	);
};

export default QuantitySelector;