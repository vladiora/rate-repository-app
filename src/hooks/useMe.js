import { useQuery } from '@apollo/client';
import { ME } from '../graphql/queries';

const useMe = () => {
    const { data, refetch } = useQuery(ME, {
        fetchPolicy: 'no-cache',
    });

    const me = data ? data.me : { me: null };

    return [me, refetch];
};

export default useMe;
