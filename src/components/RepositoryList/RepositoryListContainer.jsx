import { FlatList, Pressable } from 'react-native';
import RepositoryItem from './RepositoryItem';
import ItemSeparator from './ItemSeparator';
import RepositorySortMenu from './RepositorySortMenu';

const RepositoryListContainer = ({ repositories, navigate, setOrderBy, setOrderDirection, setSearchKeyword, onEndReach }) => {

	// Get the nodes from the edges array
	const repositoryNodes = repositories
		? repositories.edges.map(edge => edge.node)
		: [];

	const handleRepositoryClick = (item) => {
		navigate(`/repositories/${item.id}`);
	};

	return (
		<FlatList
			ListHeaderComponent={
				<RepositorySortMenu
					setOrderBy={setOrderBy}
					setOrderDirection={setOrderDirection}
					setSearchKeyword={setSearchKeyword}
				/>
			}
			data={repositoryNodes}
			ItemSeparatorComponent={ItemSeparator}
			renderItem={({item}) => <Pressable onPress={() => handleRepositoryClick(item)}><RepositoryItem item={item} /></Pressable>}
			keyExtractor={item => {return item.id}}
			onEndReached={onEndReach}
      		onEndReachedThreshold={0.2}
		/>
	);
};

export default RepositoryListContainer;
