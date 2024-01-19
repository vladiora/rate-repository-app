import { View, StyleSheet, Alert, Pressable } from 'react-native';
import { useNavigate } from 'react-router-native';

import Text from '../Text';
import theme from '../../theme';

const styles = StyleSheet.create({
	circle: {
		width: 50,
		height: 50,
		borderRadius: 25,
		borderWidth: 2,
		alignItems: 'center',
		justifyContent: 'center',
		borderColor: theme.colors.primary,
		marginRight: 8
	},
	buttonContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		alignContent: 'center',
		justifyContent: 'center',
		paddingTop: 8
	},
});

const ReviewItem = ({
  review,
  titleAsUsername = true,
  showButtons = false,
  handleDeleteClick = null,
}) => {
  const navigate = useNavigate();

  const formatDate = (dateString) => {

	if (!dateString) {
	  console.log('Failed to format date');
	  return null;
	}

	const dateSubString = dateString.split('T')[0];

	if (!dateSubString) {
	  console.log('Failed to format date');
	  return null;
	}

	return dateSubString;
  };

  const createDeleteAlert = () =>
	Alert.alert(
	  'Delete Review',
	  'Are you sure you want to delete this review?',
	  [
		{
		  text: 'Cancel',
		  style: 'cancel',
		},
		{ text: 'Delete', onPress: () => handleDeleteClick(review.id) },
	  ]
	);

  return (
	<>
	  <View style={theme.whiteCnt}>
		<View style={{flexDirection: 'row'}}>
			<View style={styles.circle}>
				<Text>{review.rating}</Text>
			</View>
			<View style={{ flex: 1}}>
				{titleAsUsername ? (
					<Text fontWeight="bold" fontSize='subheading'>{review.user.username}</Text>
				) : (
					<Text fontWeight="bold" fontSize='subheading'>{review.repository.name}</Text>
				)}
				<Text color='textSecondary' >{formatDate(review.createdAt)}</Text>
				<Text style={{ marginTop: 5 }}>{review.text}</Text>
			</View>
		</View>
		{showButtons && (
			<View style={styles.buttonContainer}>
				<Pressable style={[theme.primaryButton, {flex: 1}]} onPress={() => navigate(`/repositories/${review.repository.id}`)}>
					<Text style={{color: '#fff'}}>View Repository</Text>
				</Pressable>
				<Pressable style={[theme.primaryButton, {flex: 1, marginLeft: 10, backgroundColor: '#FF0000'}]} onPress={createDeleteAlert}>
					<Text style={{color: '#fff'}}>Delete Repository</Text>
				</Pressable>
			</View>
		)}
	  </View>
	</>
  );
};

export default ReviewItem;
