import * as React from 'react';
import { useInterpret } from '@xstate/react';
import authMachine from '../machine/auth';
import { GlobalStateContextType } from '../machine/contextTypes/demo';

export const GlobalStateContext = React.createContext(
	{} as GlobalStateContextType
);

export const GlobalStateProvider = (props) => {
	const authService = useInterpret(authMachine);

	return (
		<GlobalStateContext.Provider value={{ authService }}>
			{props.children}
		</GlobalStateContext.Provider>
	);
};
