import { useMutation } from '@apollo/client';

import { CREATE_USER } from '../graphql/mutations';

const useSignUp = () => {
	const [mutation, result] = useMutation(CREATE_USER);

	const signUp = async (username, password) => {
		const user = {
		username,
		password,
		};

		const { data } = await mutation({ variables: { user } });

		console.log('new user data from server', data);
	};

	return {
		signUp,
		result,
	};
};

export default useSignUp;
