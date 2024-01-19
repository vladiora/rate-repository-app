import { View, StyleSheet, Image, Pressable } from "react-native";
import Text from "../Text";
import theme from "../../theme";
import CountItem from "../CountItem";
import * as Linking from 'expo-linking';

const RepositoryItem = ({item, showFullView = false}) => {

		const styles = StyleSheet.create({
				languageBackground: {
					backgroundColor: theme.colors.primary,
					borderRadius: 5,
					paddingVertical: 2,
					paddingHorizontal: 5,
					alignSelf: 'flex-start'
				},
				language: {
					color: '#fff'
				},
				margin: {
					marginBottom: 8,
				},
				infoContainer: {
					flexDirection: 'row',
					justifyContent: 'space-around',
				},
				rowContainer: {
					flexDirection: 'row',
					alignItems: 'stretch',
				},
				repoImage: {
					width: 50,
					height: 50,
					borderRadius: 10,
					marginRight: 8,
				},
		});

		const formatNumber = (num) => {
			if (num >= 1000) {
				return (num / 1000).toFixed(1) + 'k';
			}
			return num;
		};

		return <View testID="repositoryItem" style={theme.whiteCnt}>
							<View style={styles.rowContainer}>
								{item.ownerAvatarUrl && <Image style={styles.repoImage} source={{ uri: item.ownerAvatarUrl }} />}
								<View style={{ flex: 1, marginBottom: 8 }}>
									<Text fontSize='heading' fontWeight='bold' style={styles.margin}>{item.fullName}</Text>
									<Text color='textSecondary' fontSize='subheading' style={styles.margin}>{item.description}</Text>
									<View style={styles.languageBackground}>
										<Text style={styles.language}>{item.language}</Text>
									</View>
								</View>
							</View>
							<View style={styles.infoContainer}>
								<CountItem countNum={formatNumber(item.stargazersCount)} text='Stars'/>
								<CountItem countNum={formatNumber(item.forksCount)} text='Forks'/>
								<CountItem countNum={item.reviewCount} text='Reviews'/>
								<CountItem countNum={item.ratingAverage} text='Rating'/>
							</View>
							{showFullView && (
								<Pressable style={theme.primaryButton} onPress={() => Linking.openURL(item.url)}>
									<Text fontSize='fontSizeSubheading' style={{color: '#fff'}}>Open in Github</Text>
								</Pressable>
							)}
						</View>;
};

export default RepositoryItem;
