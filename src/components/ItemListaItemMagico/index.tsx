import React from 'react';
import { TouchableOpacity, Text, TouchableOpacityProps } from 'react-native';
import { styles } from './styles';
import { listaDeItensMagicosProps } from '../../services/api';

interface ItemListaItemMagicoProps extends TouchableOpacityProps {
	equipamento: listaDeItensMagicosProps;
	setModal: React.Dispatch<React.SetStateAction<boolean>>;
	setIndexSelecionado: React.Dispatch<React.SetStateAction<string>>;
};

export const ItemListaItemMagico = ({ equipamento, setModal, setIndexSelecionado, ...rest }: ItemListaItemMagicoProps) => {

	function abreModal () {
		setModal(oldState=> !oldState);
		setIndexSelecionado(equipamento.index);
	}

	return <TouchableOpacity onPress={abreModal} {...rest} style={styles.buttonMagicItem}>
		<Text style={styles.textMagicItem}>
			{equipamento.name}
		</Text>
	</TouchableOpacity>;
};