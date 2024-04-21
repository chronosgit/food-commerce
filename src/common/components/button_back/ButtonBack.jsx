import doExist from "@common/utils/doExist";
import arrowRight from "@assets/icons/arrow_right.png";
import styles from "./button_back.module.css";

const BackButton = ({
	isDisabled = false,
	onClick,
}) => {

	if(!doExist(onClick)) {
		return;
	}

	const customStyles = {
		cursor: isDisabled ? "not-allowed" : "pointer",
	};

	return (
		<button 
			className={styles.back_btn} 
			style={customStyles}
			disabled={isDisabled}
			onClick={onClick}
		>
			<img 
				className={styles.arrow}
				src={arrowRight}
				alt="" 
			/>
		</button>
	);
};

export default BackButton;