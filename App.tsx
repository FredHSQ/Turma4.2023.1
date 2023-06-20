import React from 'react';
import { BottomTabNavigator } from './src/routes/BottomTabNavigator';
import { StatusBar } from 'expo-status-bar';

const App = () => {

	return <>
		<StatusBar
			hidden={false}
			translucent={true}
			style='light'
		/>
		<BottomTabNavigator />
	</>
}

export default App;

