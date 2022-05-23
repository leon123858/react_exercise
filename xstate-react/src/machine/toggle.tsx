import { ToggleContext } from './contextTypes/demo';
import { createMachine, assign } from 'xstate';

const toggleMachine = createMachine<ToggleContext>({
	id: 'toggle',
	initial: 'inactive',
	context: {
		count: 0,
	},
	states: {
		inactive: {
			on: { TOGGLE: 'active' },
		},
		active: {
			entry: assign({ count: (ctx) => ctx.count + 1 }),
			on: { TOGGLE: 'inactive' },
		},
	},
});

export default toggleMachine;
