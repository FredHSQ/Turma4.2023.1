import axios, { AxiosResponse } from "axios";

const apiItensMagicos = axios.create({
	baseURL: 'https://www.dnd5eapi.co/api/'
});

interface resposeGetItensMagicos {
	count: number,
	results: listaDeItensMagicosProps[]
}

export interface listaDeItensMagicosProps {
	index: string,
	name: string,
	url: string,
	preco?: number
}

export function getItensMagicos(): Promise<AxiosResponse<resposeGetItensMagicos, any>> {
	const url = 'magic-items/'

	return apiItensMagicos.get(url);
}

interface getItemStatusProps {
	index: string;
}

export interface ItemStatus {
	desc?: (string)[] | null;
	equipment_category: EquipmentCategory;
	index: string;
	name: string;
	rarity: Rarity;
	variant: boolean;
	variants?: any[] | null;
	url: string;
}

export interface EquipmentCategory {
	index: string;
	name: string;
	url: string;
}

export interface Rarity {
	name: string;
}


export function getItemStatus({ index }: getItemStatusProps): Promise<AxiosResponse<ItemStatus,any>> {
	const url = `magic-items/${index}`

	return apiItensMagicos.get(url);
}