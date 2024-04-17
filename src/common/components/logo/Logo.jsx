import logoPng from "@assets/images/logo_small.png";

const Logo = ({width}) => {

	const customStyles = {
		width: width,
	};

	return (
		<img 
			src={logoPng} 
			alt="Logo"
			style={customStyles} 
		/>
	);
};

export default Logo;