import RepositoryItem from "./RepositoryItem";
import useRepository from '../../hooks/useRepository';
import Text from "../Text";

import { FlatList } from 'react-native';
import ItemSeparator from "./ItemSeparator";
import ReviewItem from "./ReviewItem";

const RepositoryItemContainer = () => {
	const { loading, data } = useRepository();

	const item = !loading && data ? data.repository : null;

	const reviewNodes = item && item.reviews ? item.reviews.edges.map((edge) => edge.node) : [];

	if (!item) {
		return <Text>Loading item...</Text>;
	}

	return (
		<FlatList
		  data={reviewNodes}
		  ListHeaderComponent={<RepositoryItem item={item} showFullView={true} />}
		  ItemSeparatorComponent={ItemSeparator}
		  renderItem={({ item }) => <ReviewItem review={item} />}
		  keyExtractor={({ id }) => id}
		/>
	  );
};

export default RepositoryItemContainer;
