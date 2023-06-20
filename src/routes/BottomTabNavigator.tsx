import React from 'react';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Skills } from '../screens/Skills';
import { Shop } from '../screens/Shop';

import ShopIcon from '../assets/icons/storefront_FILL0_wght400_GRAD0_opsz48.png';
import SkillsIcon from '../assets/icons/fact_check_FILL0_wght400_GRAD0_opsz48.png';

const Tab = createBottomTabNavigator<RootTabParamList>();

export type RootTabParamList = {
	Skills: undefined;
	Shop: undefined;
}

export const BottomTabNavigator = () => {
	return (
		<NavigationContainer>
			<Tab.Navigator
				screenOptions={{
					headerShown: false,
					tabBarActiveTintColor: "#fff",
					tabBarInactiveTintColor: "#aaa",
					tabBarStyle: {
						backgroundColor: "#000",
						paddingBottom: 2
					}
				}}
			>
				<Tab.Screen
					options={{
						tabBarIcon: ({ color }) => (
							<Image
								resizeMode='contain'
								source={SkillsIcon}
								style={{ tintColor: color, width: 30 }}
							/>

						)
					}}
					name="Skills"
					component={Skills}
				/>
				<Tab.Screen
					options={{
						tabBarIcon: ({ color }) => (
							<Image
								resizeMode='contain'
								source={ShopIcon}
								style={{ tintColor: color, width: 30 }}
							/>

						)
					}}
					name="Shop"
					component={Shop}
				/>
			</Tab.Navigator>
		</NavigationContainer>
	);
}