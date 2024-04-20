import doExist from "@common/utils/doExist";
import styles from "./button_order.module.css";

const ButtonOrder = ({text, isDisabled, onClick}) => {

	if(!doExist(text, isDisabled, onClick)) {
		return;
	}

	const disabledStyles = {
		backgroundColor: isDisabled ? "var(--color-gray-dark)" : "",
		cursor: isDisabled ? "auto" : "pointer",
	};

	return (
		<button 
			className={styles.button_order}
			style={disabledStyles}
			disabled={isDisabled}
			onClick={onClick}
		>
			{text}
		</button>
	);
};

export default ButtonOrder;