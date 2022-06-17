import * as React from 'react';
import { useContext } from 'react';
import toggleMachine from '../machine/toggle';
import { useMachine, useActor, useSelector } from '@xstate/react';
import { GlobalStateContext } from './globalProvider';
import loginSelector from '../utils/selector/loginSelector';

const ToggleCountBtn = () => {
	const [current, send] = useMachine(toggleMachine);
	const active = current.matches('active');
	const { count } = current.context;
	// auth by global
	const globalServices = useContext(GlobalStateContext);
	// render when all auth change
	const [authState, setAuth] = useActor(globalServices.authService);
	// // render when auth state change (效能佳,當被別人 render 時可用, 減少無意義渲染)
	// const isLogin = useSelector(globalServices.authService, loginSelector);
	// console.log(isLogin);

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
