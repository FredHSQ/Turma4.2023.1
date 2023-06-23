import React, { createContext, useState, useEffect } from "react";
import { listaDeItensMagicosProps } from "../services/api";
import AsyncStorage from '@react-native-async-storage/async-storage';

interface ProvedorContextCartProps {
	children: React.ReactNode
}

interface ContextCartProps {
	listaDeItensMagicos: listaDeItensMagicosProps[];
	adcionaItemAListaDeItensMagicos: (item: listaDeItensMagicosProps) => void;
	retiraItemDaListaDeItensMagicos: (index: string) => void;
	precoTotal: number;
}

export const ContextCart = createContext<ContextCartProps>({
	listaDeItensMagicos: [],
	adcionaItemAListaDeItensMagicos: () => { },
	retiraItemDaListaDeItensMagicos: () => { },
	precoTotal: 0
});

export const ProvedorContextCart = ({ children }: ProvedorContextCartProps) => {
	const [listaDeItensMagicos, setListaDeItensMagicos] = useState<listaDeItensMagicosProps[]>([]);
	const [precoTotal, setPrecoTotal] = useState<number>(0);

	useEffect(() => {
		getListaDeItensMagicos().then(res => {
			setListaDeItensMagicos(res ? res : []);
		})
	}, []);

	useEffect(() => {
		let soma: number = 0;
		listaDeItensMagicos.length >= 1 && listaDeItensMagicos.map(item => {
			soma = soma + item.preco
		}
		);

		setPrecoTotal(soma);
	}, [listaDeItensMagicos])

	function adcionaItemAListaDeItensMagicos(item: listaDeItensMagicosProps) {
		setListaDeItensMagicos([...listaDeItensMagicos, item]);
		storeListaDeItensMagicos([...listaDeItensMagicos, item]);
	}

	function retiraItemDaListaDeItensMagicos(index: string) {
		let novaListaDeItens = listaDeItensMagicos.filter(item => {
			return item.index !== index
		});
		setListaDeItensMagicos(novaListaDeItens);
	}

	const storeListaDeItensMagicos = async (ListaDeItensMagicos: listaDeItensMagicosProps[]) => {
		try {
			await AsyncStorage.setItem('lista', JSON.stringify(ListaDeItensMagicos));
		} catch (e) {
			// saving error
		}
	};

	const getListaDeItensMagicos = async () => {
		try {
			const jsonValue = await AsyncStorage.getItem('lista');
			return jsonValue != null ? JSON.parse(jsonValue) : null;
		} catch (e) {
			// error reading value
		}
	};

	return (
		<ContextCart.Provider
			value={{
				listaDeItensMagicos,
				adcionaItemAListaDeItensMagicos,
				retiraItemDaListaDeItensMagicos,
				precoTotal
			}}
		>
			{children}
		</ContextCart.Provider>
	)
}
