import { useState } from "react";
import mockCategories from "../api/mockCategories";

const useCategories = () => {

	const [categories, setCategories] = useState(mockCategories);

	

	return {
		categories, 
	};
};

export default useCategories;