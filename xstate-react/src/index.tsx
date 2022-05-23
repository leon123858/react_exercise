import './styles.css';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import ToggleCountBtn from './component/toggleCountBtn';
import { GlobalStateProvider } from './component/globalProvider';

function App() {
	return (
		<div className='App'>
			<GlobalStateProvider>
				<ToggleCountBtn></ToggleCountBtn>
			</GlobalStateProvider>
		</div>
	);
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
