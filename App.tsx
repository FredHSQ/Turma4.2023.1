import React from 'react';
import { BottomTabNavigator } from './src/routes/BottomTabNavigator';
import { StatusBar } from 'expo-status-bar';
import { ProvedorContextCart } from './src/context/contextCart';

const App = () => {

	return <ProvedorContextCart>
		<StatusBar
			hidden={false}
			translucent={true}
			style='light'
		/>
		<BottomTabNavigator />
	</ProvedorContextCart>
}

export default App;

