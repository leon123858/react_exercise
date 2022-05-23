import authMachine from '../auth';
import { ActorRefFrom } from 'xstate';

export interface ToggleContext {
	count: number;
}
export interface GlobalStateContextType {
	authService: ActorRefFrom<typeof authMachine>;
}
