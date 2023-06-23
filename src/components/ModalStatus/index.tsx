import React, { useEffect, useState } from "react";
import { View, Modal, ModalProps, Text, ScrollView, TouchableOpacity, Image, ActivityIndicator } from "react-native";
import { styles } from "./styles";

import CloseIcon from "../../assets/icons/close_FILL0_wght400_GRAD0_opsz48.png"
import { ItemStatus, getItemStatus } from "../../services/api";

interface ModalStatusProps extends ModalProps {
	modal: boolean,
	index: string;
	setModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ModalStatus = ({ modal, setModal, index, ...rest }: ModalStatusProps) => {

	const [itemStatus, setItemStatus] = useState<ItemStatus>();
	const [loading, setLoading] = useState<boolean>(true);

	useEffect(() => {
		setLoading(true);
		getItemStatus({ index }).then(algumaCoisa => {
			setItemStatus(algumaCoisa.data);
			console.log(algumaCoisa.data.desc);

		}).finally(() => {
			setLoading(false)
		})
	}, []);

	function precoRandomico() {
		return Math.floor(Math.random() * 10000);
	}

	return <Modal
		animationType="slide"
		transparent={true}
		visible={modal}
		onRequestClose={() => {
			setModal(!modal);
		}}
		{...rest}
	>
		<View style={styles.modal}>
			<View style={styles.modalContainer}>
				{loading ?
					<ActivityIndicator
						size={'large'}
					/>
					:
					<>
						<View style={styles.titleContainer}>
							<Text style={styles.title}>
								{itemStatus.name}
							</Text>
							<TouchableOpacity
								onPress={() => setModal(false)}
								style={{ alignContent: 'flex-end', width: '10%' }}
							>
								<Image
									style={styles.closeIcon}
									source={CloseIcon}
								/>
							</TouchableOpacity>
						</View>
						<ScrollView
							showsVerticalScrollIndicator={false}
						>
							<View style={styles.firstStatsContainer}>
								<View style={styles.firstStats}>
									<Text style={styles.textTitle}>
										Raridade:
									</Text>
									<Text style={styles.text}>
										{itemStatus.rarity.name}
									</Text>
								</View>
								<View style={styles.firstStats}>
									<Text style={styles.textTitle}>
										Tipo:
									</Text>
									<Text style={styles.text}>
										{itemStatus.desc[0]}
									</Text>
								</View>
								<View style={styles.firstStats}>
									<Text style={styles.textTitle}>
										Preço:
									</Text>
									<Text style={styles.text}>
										R$ {precoRandomico()}
									</Text>
								</View>
							</View>
							<View style={styles.descriptionContainer}>
								<Text style={styles.textTitle}>
									Descricao:
								</Text>
								<Text style={styles.text}>
									{itemStatus.desc[1]}
								</Text>
							</View>
							{itemStatus.desc[2] &&
								<View style={styles.descriptionContainer}>
									<Text style={styles.textTitle}>
										Informações adicionais:
									</Text>
									<Text style={styles.text}>
										{itemStatus.desc.map((text,index)=>{
											if (index > 1)
												return text
										})}
									</Text>
								</View>
							}
						</ScrollView>
					</>
				}
			</View>
		</View>

	</Modal>
}