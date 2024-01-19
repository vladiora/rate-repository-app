import { FlatList, View, StyleSheet, Pressable } from 'react-native';
import RepositoryItem from './RepositoryItem';

const styles = StyleSheet.create({
	separator: {
		height: 10,
	},
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryListContainer = ({ repositories, navigate }) => {

	// Get the nodes from the edges array
	const repositoryNodes = repositories
		? repositories.edges.map(edge => edge.node)
		: [];

	const handleRepositoryClick = (item) => {
		console.log(`handleRepositoryClick for ${item.id}`);

		navigate(`/repositories/${item.id}`);
	};

	return (
		<FlatList
			data={repositoryNodes}
			ItemSeparatorComponent={ItemSeparator}
			renderItem={({item}) => <Pressable onPress={() => handleRepositoryClick(item)}><RepositoryItem item={item} /></Pressable>}
			keyExtractor={item => {return item.id}}
		/>
	);
};

export default RepositoryListContainer;
