import React, { useEffect, useState } from 'react';
import { View, Text,TextInput, FlatList } from 'react-native';
import { styles } from './styles';

import { Button } from '../../components/Button';
import { SkillCard } from '../../components/SkillCard';
import { SafeAreaView } from 'react-native-safe-area-context';

export interface SkillData {
	id: string,
	name: string
}

export const Skills = () => {
	const [greetings, setGreetings] = useState<string>("Bom dia");
	const [newSkill, setNewSkill] = useState<string>('');
	const [skillList, setSkillList] = useState<SkillData[]>([]);

	useEffect(() => {
		const horaDeAgora = new Date().getHours();
		if (horaDeAgora < 12) {
			setGreetings("Bom dia!");
		} else if (horaDeAgora >= 12 && horaDeAgora < 18) {
			setGreetings("Bom tarde!");
		} else {
			setGreetings("Boa noite!");
		}
	}, []);

	function handleNewSkill() {
		const temporarySkill: SkillData = {
			id: String(new Date().getTime()),
			name: newSkill
		};
		setSkillList(oldState => [...oldState, temporarySkill]);
	};

	function handleRemoveSkill(id: string) {
		setSkillList(oldState => oldState.filter(
			skill => skill.id !== id
		));
	};

	return <SafeAreaView style={styles.container}>
		<Text style={styles.title}>
			Bem vindo, Fred!
		</Text>
		<Text style={styles.greetings}>
			{greetings}
		</Text>
		<TextInput
			placeholder='Escreva sua habilidade'
			placeholderTextColor='#555'
			style={styles.input}
			onChangeText={setNewSkill}
			value={newSkill}
		/>
		<Button
			title='Adicionar habilidade'
			onPress={handleNewSkill}
		/>
		<Text style={[styles.title, { marginVertical: 20 }]}>
			Minhas habilidades:
		</Text>
		<FlatList
			data={skillList}
			keyExtractor={item => item.id}
			renderItem={({ item }) => {
				return (
					<SkillCard
						skill={item}
						onPress={()=> handleRemoveSkill(item.id)}
					/>
				)
			}}
		/>
	</SafeAreaView>;
}