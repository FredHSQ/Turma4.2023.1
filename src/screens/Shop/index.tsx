import React, { useState } from "react";
import { View, Text, FlatList } from "react-native";
import { styles } from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";

export const Shop = () => {
	const [magicItemList, setMagicItemList] = useState<number[]>([]);

	return (
		<SafeAreaView style={styles.container}>
			<Text style={styles.title}>
				Magic Shop
			</Text>
			<FlatList
				data={magicItemList}
				renderItem={()=>{
					return <Text>
						Fred
					</Text>
				}}
			/>
		</SafeAreaView>
	)
}