import useToaster from "@common/hooks/useToaster";
import { createContext } from "react";

const ToasterContext = createContext({});

const ToasterContextProvider = ({children}) => {

	const toaster = useToaster();

	return (
		<ToasterContext.Provider value={toaster}>
			{children}
		</ToasterContext.Provider>
	);
};

export {
	ToasterContextProvider,
};

export default ToasterContext;