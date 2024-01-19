import { useMutation } from '@apollo/client';

import { CREATE_REVIEW } from '../graphql/mutations';

const useCreateReview = () => {
	const [mutate, result] = useMutation(CREATE_REVIEW);

	const createReview = async (repositoryName, ownerName, rating, text) => {
		const review = {
			repositoryName,
			ownerName,
			rating,
			text,
		};

		const { data } = await mutate({
			variables: {
				review,
			},
		});

		return data.createReview.repositoryId;
	};

	return [createReview, result];
};

export default useCreateReview;
