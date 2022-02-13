import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Hello from './component/hello';
import { Fragment } from 'react';
import { Header } from 'react-native/Libraries/NewAppScreen';

export default function App() {
	return (
		<Fragment>
			<View style={styles.header}>
				<Text>Baby baby is Cute</Text>
			</View>
			<View style={styles.container}>
				<Text>Open up App.tsx to start working on your app!</Text>

				<StatusBar style='auto' />
			</View>
		</Fragment>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	header: {
		flex: 1,
		backgroundColor: '#ccc',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
