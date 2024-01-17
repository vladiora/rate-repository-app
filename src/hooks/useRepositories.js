import { useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = () => {
    const [repositories, setRepositories] = useState(undefined);

    const { loading, refetch } = useQuery(GET_REPOSITORIES, {
      fetchPolicy: 'cache-and-network',

      onCompleted: (data) => {
        console.log('Query completed: GET_REPOSITORIES');
        setRepositories(data.repositories);
      },

      onError: (error) =>
        console.log(`Error at query GET_REPOSITORIES: ${error.message}`),
    });

    return {
      repositories,
      loading,
      refetch,
    };
};

export default useRepositories;
