import RepositoryItem from "./RepositoryItem";
import useRepository from '../../hooks/useRepository';
import Text from "../Text";

const RepositoryItemContainer = () => {
	const { loading, data } = useRepository();

	const item = !loading && data ? data.repository : null;

	if (!item) {
		return <Text>Loading item...</Text>;
	}

	return <RepositoryItem item={item} showFullView={true} />
};

export default RepositoryItemContainer;
