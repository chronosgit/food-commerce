import doExist from "@common/utils/doExist";
import styles from "./quantity_selector.module.css";

const QuantitySelector = ({
	quantity, isMinusDisabled,
	onPlus, onMinus,
}) => {

	if(!quantity && quantity !== 0) {
		return;
	}
	if(!doExist(isMinusDisabled, onPlus, onMinus)) {
		return;
	} 

	const disabledControllerStyles = {
		cursor: isMinusDisabled ? "" : "cursor",
	};

	const onController = (trigger) => {
		switch(trigger) {
			case "plus":
				onPlus();
				break;
			case "minus":
				onMinus();
		}
	};

	return (
		<div className={styles.wrapper}>
			<button
				className={styles.controller}
				style={disabledControllerStyles} 
				disabled={isMinusDisabled}
				onClick={() => onController("minus")}
			>
				<p className={styles.controller_btn}>-</p>
			</button>

			<p className={styles.quantity}>{quantity}</p>

			<button 
				className={styles.controller}
				style={disabledControllerStyles}
				onClick={() => onController("plus")}
			>
				<p className={styles.controller_btn}>+</p>
			</button>
		</div>
	);
};

export default QuantitySelector;