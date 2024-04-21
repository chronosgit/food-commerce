import doExist from "@common/utils/doExist";
import styles from "./button_order.module.css";

const ButtonOrder = ({content, isDisabled = false, onClick}) => {

	if(!doExist(content, isDisabled, onClick)) {
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
			{content}
		</button>
	);
};

export default ButtonOrder;