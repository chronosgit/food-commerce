import { useState } from "react";

const useToaster = () => {

	const [isActive, setActive] = useState(false);
	const [toasterText, setToasterText] = useState("");

	const callToaster = (text) => {
		if(!text) {
			return;
		}

		setActive(true);
		setToasterText(text);

		setTimeout(() => {
			setActive(false);
		}, 2000);
	};

	return {
		isActive, callToaster, toasterText
	};
};

export default useToaster;