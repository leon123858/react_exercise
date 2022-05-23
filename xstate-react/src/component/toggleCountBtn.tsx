import * as React from 'react';
import { useContext } from 'react';
import toggleMachine from '../machine/toggle';
import { useMachine, useActor } from '@xstate/react';
import { GlobalStateContext } from './globalProvider';

const ToggleCountBtn = () => {
	const [current, send] = useMachine(toggleMachine);
	const active = current.matches('active');
	const { count } = current.context;
	// auth by global
	const globalServices = useContext(GlobalStateContext);
	const [authState, setAuth] = useActor(globalServices.authService);

	return (
		<React.Fragment>
			<h1>XState React Template</h1>
			<h2>Fork this template!</h2>
			{authState.matches('notLogin') ? (
				<button onClick={() => setAuth('login')}>點此登入再開始</button>
			) : (
				<React.Fragment>
					<button onClick={() => send('TOGGLE')}>
						Click me ({active ? '✅' : '❌'})
					</button>
					<button onClick={() => setAuth('logout')}>點此登出</button>
				</React.Fragment>
			)}
			<br></br>
			<code>
				Toggled <strong>{count}</strong> times
			</code>
		</React.Fragment>
	);
};

export default ToggleCountBtn;
