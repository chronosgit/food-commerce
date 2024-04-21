import doExist from "@common/utils/doExist";
import styles from "./toaster.module.css";

const Toaster = ({
	text, color, bgColor, isActive,
}) => {

	if(!doExist(text, color, isActive)) {
		return;
	}

	const customStyles = {
		top: isActive ? "1rem" : "-20%",
		color: color,
		backgroundColor: bgColor,
	};

	return (
		<div className={styles.toaster} style={customStyles}>
			{text}
		</div>	
	);
};

export default Toaster;