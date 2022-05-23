import { createMachine } from 'xstate';
import { AUTH_EVENT, AUTH_STATE } from './consts/demo';

const statesConfig = {
	[AUTH_STATE.IS_LOGIN]: {
		on: { [AUTH_EVENT.LOGOUT]: AUTH_STATE.NOT_LOGIN },
	},
	[AUTH_STATE.NOT_LOGIN]: {
		on: { [AUTH_EVENT.LOGIN]: AUTH_STATE.IS_LOGIN },
	},
};

const authMachine = createMachine<{}>({
	id: 'global',
	initial: 'notLogin',
	context: {},
	states: statesConfig,
});

export default authMachine;
