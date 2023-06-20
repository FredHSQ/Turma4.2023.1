import React from "react";
import { TouchableOpacity, Image, Text, TouchableOpacityProps } from "react-native";
import { styles } from "./styles";

import CirculoMagico from '../../assets/images/CirculoMagico.png';
import { SkillData } from "../../screens/Skills";

interface SkillCardProps extends TouchableOpacityProps {
	skill: SkillData
}

export const SkillCard = ({skill, ...rest }: SkillCardProps) => {
	return <TouchableOpacity
		style={styles.buttonSkill}
		{...rest}
	>
		<Image style={styles.image} source={CirculoMagico} />
		<Text style={styles.textSkill}>{skill.name}</Text>
	</TouchableOpacity>
};