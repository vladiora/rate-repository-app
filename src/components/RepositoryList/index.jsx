import RepositoryListContainer from './RepositoryListContainer';
import useRepositories from '../../hooks/useRepositories';
import { useNavigate } from 'react-router-native';

const RepositoryList = () => {
	const { repositories } = useRepositories();
	const navigate = useNavigate();

	return <RepositoryListContainer repositories={repositories} navigate={navigate} />;
};

export default RepositoryList;
