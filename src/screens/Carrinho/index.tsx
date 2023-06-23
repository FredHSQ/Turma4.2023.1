import React, { useContext, useState } from "react";
import { View, Text, FlatList } from "react-native";
import { styles } from "./styles";
import { ItemListaItemMagico } from "../../components/ItemListaItemMagico";
import { ModalStatus } from "../../components/ModalStatus";
import { ContextCart } from "../../context/contextCart";

export const Carrinho = () => {
	const [indexSelecionado, setIndexSelecionado] = useState<string>("");
	const [precoSelecionado, setPrecoSelecionado] = useState<number>(0);

	const [modal, setModal] = useState<boolean>();

	const {listaDeItensMagicos, precoTotal} = useContext(ContextCart)

	return <View style={styles.container}>
		<Text style={styles.title}>
			Carrinho
		</Text>
		<FlatList
			data={listaDeItensMagicos}
			renderItem={({ item }) => {
				return <ItemListaItemMagico
					equipamento={item}
					setIndexSelecionado={setIndexSelecionado}
					setModal={setModal}
					setPrecoSelecionado={setPrecoSelecionado}
				/>
			}}
		/>
		<Text style={styles.title}>
			Preço  R$ {precoTotal}
		</Text>
		{modal && <ModalStatus
			modal={modal}
			setModal={setModal}
			index={indexSelecionado}
			precoSelecionado={precoSelecionado}
		/>
		}
	</View>
}