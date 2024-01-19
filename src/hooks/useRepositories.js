import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = (
  orderBy = 'CREATED_AT',
  orderDirection = 'DESC',
  searchKeyword = '',
  first = 4
) => {
    const { data, loading, fetchMore } = useQuery(GET_REPOSITORIES, {
      fetchPolicy: 'cache-and-network',
      variables: {
        orderBy,
        orderDirection,
        searchKeyword,
        first
      },

      onCompleted: () => console.log('Query completed: GET_REPOSITORIES'),
      onError: (error) =>
        console.log(`Error at query GET_REPOSITORIES: ${error.message}`),
    });

    const handleFetchMore = () => {
      const canFetchMore = !loading && data?.repositories.pageInfo.hasNextPage;

      if (!canFetchMore) {
        return;
      }

      fetchMore({
        variables: {
          orderBy,
          orderDirection,
          searchKeyword,
          first,
          after: data?.repositories.pageInfo.endCursor
        },
      });
    };

    return {
      repositories: data?.repositories,
      fetchMore: handleFetchMore,
      loading,
    };
};

export default useRepositories;
