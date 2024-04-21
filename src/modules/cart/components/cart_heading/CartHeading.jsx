import styles from "./cart_heading.module.css";

const CartHeading = ({heading}) => {

	if(!heading) {
		return;
	}

	return (
		<h1 className={styles.heading}>
			{heading}
		</h1>
	);
};

export default CartHeading;