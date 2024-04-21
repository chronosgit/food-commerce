import doExist from "@common/utils/doExist";
import arrowRight from "@assets/icons/arrow_right.png";
import styles from "./button_back.module.css";

const BackButton = ({onClick}) => {

	if(!doExist(onClick)) {
		return;
	}

	return (
		<button className={styles.back_btn} onClick={onClick}>
			<img 
				className={styles.arrow}
				src={arrowRight}
				alt="" 
			/>
		</button>
	);
};

export default BackButton;