import { useApolloClient } from '@apollo/client';
import useAuthStorage from './useAuthStorage';

const useSignOut = () => {
    const authStorage = useAuthStorage();
    const apolloClient = useApolloClient();

    return async () => {
        await authStorage.removeAccessToken();
        apolloClient.resetStore();
    };
};

export default useSignOut;
