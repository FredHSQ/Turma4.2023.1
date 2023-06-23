import React, { useEffect, useState } from "react";
import { Text, FlatList } from "react-native";
import { styles } from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { getItensMagicos, listaDeItensMagicosProps } from "../../services/api";
import { ItemListaItemMagico } from "../../components/ItemListaItemMagico";
import { ModalStatus } from "../../components/ModalStatus";

export const Shop = () => {
	const [magicItemList, setMagicItemList] = useState<listaDeItensMagicosProps[]>([]);
	const [modal, setModal] = useState<boolean>(false);
	const [indexSelecionado, setIndexSelecionado] = useState<string>('');
	const [loading, setLoading] = useState<boolean>(true);
	const [recarregar, setRecarregar] = useState<boolean>(true);

	useEffect(() => {
		requisicaoMagicItemList();
	}, [recarregar]);

	function requisicaoMagicItemList() {
		setLoading(true);
		getItensMagicos().then(res => {
			setMagicItemList(res.data.results);
		}).catch((err) => {
			console.log(err);
		}).finally(() => {
			setLoading(false);
		});
	};

	return (
		<SafeAreaView style={styles.container}>
			<Text style={styles.title}>
				Magic Shop
			</Text>
			<FlatList
				data={magicItemList}
				refreshing={loading}
				onRefresh={() => setRecarregar(oldState => !oldState)}
				renderItem={({ item }) => {
					return <ItemListaItemMagico
						equipamento={item}
						setIndexSelecionado={setIndexSelecionado}
						setModal={setModal}
					/>
				}}
			/>
			{modal && <ModalStatus
				modal={modal}
				setModal={setModal}
				index={indexSelecionado}
			/>
			}
		</SafeAreaView>
	)
}