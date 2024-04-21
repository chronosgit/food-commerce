import styles from "./container.module.css";

const Container = ({maxWidth, children}) => {

	const customStyles = {
		maxWidth: maxWidth,
	};

	return (	
		<div className={styles.container} style={customStyles}>
			{children}
		</div>
	);	
};

export default Container;