import RepositoryListContainer from './RepositoryListContainer';
import useRepositories from '../../hooks/useRepositories';
import { useNavigate } from 'react-router-native';
import { useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';

const setKeywordDelay = 500;

const RepositoryList = () => {
	const navigate = useNavigate();

	const [orderBy, setOrderBy] = useState('CREATED_AT');
	const [orderDirection, setOrderDirection] = useState('DESC');
	const [searchKeyword, setSearchKeyword] = useState('');

	const { repositories, fetchMore } = useRepositories(
		orderBy,
		orderDirection,
		searchKeyword,
		3
	);

	const debouncedSetSearchKeyword = useDebouncedCallback((value) => {
		setSearchKeyword(value);
	}, setKeywordDelay);

	const onEndReach = () => {
		console.log('You have reached the end of the list');
		fetchMore();
	};

	return <RepositoryListContainer repositories={repositories} navigate={navigate} setOrderBy={setOrderBy} setOrderDirection={setOrderDirection} setSearchKeyword={debouncedSetSearchKeyword} onEndReach={onEndReach} />;
};

export default RepositoryList;
