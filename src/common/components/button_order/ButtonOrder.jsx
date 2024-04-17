import styles from "./button_order.module.css";

const ButtonOrder = ({text, onClick}) => {

	if(!text) {
		return;
	}

	const onKeyDown = (e) => {
		if(e.key === "Enter") {
			onClick();
		}
	};

	return (
		<button 
			className={styles.button_order}
			onClick={onClick}
			onKeyDown={(e) => onKeyDown(e)}
		>
			{text}
		</button>
	);
};

export default ButtonOrder;