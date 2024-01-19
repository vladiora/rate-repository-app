import { useQuery } from '@apollo/client';
import { ME } from '../graphql/queries';

const useMe = (includeReviews = false) => {
    const { data, refetch } = useQuery(ME, {
        fetchPolicy: 'no-cache',
        variables: {
            includeReviews,
        },
    });

    const me = data ? data.me : { me: null };

    return [me, refetch];
};

export default useMe;
