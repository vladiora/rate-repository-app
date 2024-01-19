import RepositoryItem from "./RepositoryItem";
import useRepository from '../../hooks/useRepository';
import Text from "../Text";

import { FlatList } from 'react-native';
import ItemSeparator from "./ItemSeparator";
import ReviewItem from "./ReviewItem";

const RepositoryItemContainer = () => {
	const { loading, data, fetchMore } = useRepository(3);

	const item = !loading && data ? data.repository : null;

	const reviewNodes = item && item.reviews ? item.reviews.edges.map((edge) => edge.node) : [];

	if (!item) {
		return <Text>Loading item...</Text>;
	}

	const onEndReach = () => {
		console.log('You have reached the end of the reviews');
		fetchMore();
	};

	return (
		<FlatList
			data={reviewNodes}
			ListHeaderComponent={<RepositoryItem item={item} showFullView={true} />}
			ItemSeparatorComponent={ItemSeparator}
			renderItem={({ item }) => <ReviewItem review={item} />}
			keyExtractor={({ id }) => id}
			onEndReached={onEndReach}
      		onEndReachedThreshold={0.2}
		/>
	);
};

export default RepositoryItemContainer;
