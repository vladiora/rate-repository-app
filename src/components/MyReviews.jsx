import { FlatList } from 'react-native';
import { useMutation } from '@apollo/client';

import useMe from '../hooks/useMe';
import ItemSeparator from './RepositoryList/ItemSeparator';
import ReviewItem from './RepositoryList/ReviewItem';
import { DELETE_REVIEW } from '../graphql/mutations';

const MyReviews = () => {
  const [me, refetch] = useMe(true);
  const [mutate] = useMutation(DELETE_REVIEW);

  const reviewNodes =
    me && me.reviews ? me.reviews.edges.map((edge) => edge.node) : [];

  const handleDeleteClick = async (reviewId) => {

    await mutate({
      variables: {
        deleteReviewId: reviewId,
      },
    });

    refetch();
  };

  return (
    <FlatList
      data={reviewNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => (
          <ReviewItem
            review={item}
            showButtons={true}
            titleAsUsername={false}
            handleDeleteClick={handleDeleteClick}
          />
      )}
    />
  );
};

export default MyReviews;
