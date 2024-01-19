import RepositoryListContainer from './RepositoryListContainer';
import useRepositories from '../../hooks/useRepositories';
import { useNavigate } from 'react-router-native';
import { useState } from 'react';

const RepositoryList = () => {
	const navigate = useNavigate();

	const [orderBy, setOrderBy] = useState('CREATED_AT');
	const [orderDirection, setOrderDirection] = useState('DESC');
	const [searchKeyword, setSearchKeyword] = useState('');

	const { repositories } = useRepositories(
		orderBy,
		orderDirection,
		searchKeyword,
	);

	return <RepositoryListContainer repositories={repositories} navigate={navigate} setOrderBy={setOrderBy} setOrderDirection={setOrderDirection} setSearchKeyword={setSearchKeyword} />;
};

export default RepositoryList;
