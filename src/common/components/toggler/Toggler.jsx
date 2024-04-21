import styles from "./toggle.module.css";

const Toggler = ({isOn, onToggle}) => {

	const dynamicWrapperStyles = {
		backgroundColor: isOn ? "var(--color-green)" : "",
	};

	const circleStyles = {
		left: isOn ? "1.7rem" : "0.2rem",
	};

	return (
		<button 
			className={styles.wrapper}
			style={dynamicWrapperStyles} 
			onClick={onToggle}
		>
			<div 
				className={styles.circle} 
				style={circleStyles}
			/>
		</button>
	);
};

export default Toggler;