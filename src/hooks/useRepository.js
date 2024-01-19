import { useParams } from 'react-router-native';
import { useQuery } from '@apollo/client';

import { GET_REPOSITORY } from '../graphql/queries';

const useRepository = (first = 4) => {
  const { id } = useParams();

  const { loading, data, fetchMore } = useQuery(GET_REPOSITORY, {
    fetchPolicy: 'cache-and-network',
    variables: {
      id,
      first
    },
    onCompleted: () => console.log('Query completed: GET_REPOSITORY'),
    onError: (error) => console.log('Query error: GET_REPOSITORY', error),
  });

  const handleFetchMore = () => {
    const canFetchMore = !loading && data?.repository.reviews.pageInfo.hasNextPage;

    if (!canFetchMore) {
      return;
    }

    fetchMore({
      variables: {
        id,
        first,
        after: data?.repository.reviews.pageInfo.endCursor
      },
    });
  };

  return {
    loading,
    data,
    fetchMore: handleFetchMore,
  };
};

export default useRepository;
