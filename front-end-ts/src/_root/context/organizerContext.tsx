import  { useState, createContext, ReactNode, Dispatch, SetStateAction, useContext } from "react";

interface OrganizerContextType {
	organizer: boolean | null;
	setOrganizer: Dispatch<SetStateAction<boolean  | null>>;
}

const OrganizerContext = createContext <OrganizerContextType| null>(null);

const OrganizerContextProvider = ({ children }: { children: ReactNode }) => {
	const [organizer, setOrganizer] = useState<boolean | null>(null);
	const contextValue: OrganizerContextType = {
		organizer, 
		setOrganizer,
	};
	return (
		<OrganizerContext.Provider
			value={contextValue}
		>
			{children}
		</OrganizerContext.Provider>
	);
};
const useOrganizer = () => {
	const context = useContext(OrganizerContext);
  
	if (!context) {
	  throw new Error('useOrganizer deve ser usado dentro de um UserProvider');
	}
  
	return context;
  };
  
export { useOrganizer, OrganizerContextProvider };