import React from 'react';
import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import { styles } from './styles';

import CirculoMagico from './src/assets/images/CirculoMagico.png';

const App = () => {

	return <View style={styles.container}>
		<Text style={styles.title}>
			Fred
		</Text>
		<TouchableOpacity activeOpacity={0.7}>
			<Image style={styles.image} source={CirculoMagico} />
		</TouchableOpacity>
		<TextInput
			placeholder='Fred esteve aqui'
			placeholderTextColor='#555'
			style={styles.input}
		/>
	</View>;
}

export default App;

