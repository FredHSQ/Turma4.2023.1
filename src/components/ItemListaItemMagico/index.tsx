import React, { useContext } from 'react';
import { TouchableOpacity, Text, TouchableOpacityProps, Image } from 'react-native';
import { styles } from './styles';
import { listaDeItensMagicosProps } from '../../services/api';
import CloseIcon from '../../assets/icons/close_FILL0_wght400_GRAD0_opsz48.png';
import { ContextCart } from '../../context/contextCart';
interface ItemListaItemMagicoProps extends TouchableOpacityProps {
	equipamento: listaDeItensMagicosProps;
	setModal: React.Dispatch<React.SetStateAction<boolean>>;
	setIndexSelecionado: React.Dispatch<React.SetStateAction<string>>;
	setPrecoSelecionado?: React.Dispatch<React.SetStateAction<number>>;
};

export const ItemListaItemMagico = ({ equipamento, setModal, setIndexSelecionado, setPrecoSelecionado, ...rest }: ItemListaItemMagicoProps) => {

	const { retiraItemDaListaDeItensMagicos } = useContext(ContextCart);

	function abreModal() {
		setPrecoSelecionado && setPrecoSelecionado(equipamento.preco);
		setIndexSelecionado(equipamento.index);
		setModal(oldState => !oldState);
	}

	return <TouchableOpacity onPress={abreModal} {...rest} style={styles.buttonMagicItem}>
		<Text style={styles.textMagicItem}>
			{equipamento.name}
		</Text>
		{equipamento.preco &&
			<TouchableOpacity onPress={() => retiraItemDaListaDeItensMagicos(equipamento.index)}>
				<Image source={CloseIcon} style={styles.closeIcon} />
			</TouchableOpacity>
		}
	</TouchableOpacity>;
};