import { FlatList, View, StyleSheet } from 'react-native';
import RepositoryItem from './RepositoryItem';

const styles = StyleSheet.create({
	separator: {
		height: 10,
	},
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryListContainer = ({ repositories }) => {

	// Get the nodes from the edges array
	const repositoryNodes = repositories
		? repositories.edges.map(edge => edge.node)
		: [];

	return (
		<FlatList
			data={repositoryNodes}
			ItemSeparatorComponent={ItemSeparator}
			renderItem={({item}) => <RepositoryItem fullName={item.fullName} description={item.description} language={item.language} stars={item.stargazersCount} forks={item.forksCount} review={item.reviewCount} rating={item.ratingAverage} avatarUrl={item.ownerAvatarUrl}/>}
			keyExtractor={item => {return item.id}}
		/>
	);
};

export default RepositoryListContainer;
