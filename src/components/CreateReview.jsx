import { Formik } from 'formik';
import { Pressable, View } from 'react-native';
import * as yup from 'yup';

import FormikTextInput from './FormikTextInput';
import Text from './Text';
import useCreateReview from '../hooks/useCreateReview';
import { useNavigate } from 'react-router-native';
import theme from '../theme';

const initialValues = {
	ownerName: '',
	repositoryName: '',
	rating: '',
	text: '',
};

const validationSchema = yup.object().shape({
	ownerName: yup.string().required('Repository owner name is required'),
	repositoryName: yup.string().required('Repository name is required'),
	rating: yup.number().min(0).max(100).required('Rating is required'),
	text: yup.string().max(2000),
});

const CreateReviewForm = ({ onSubmit }) => {
	return (
		<View style={theme.whiteCnt}>
		<FormikTextInput name="ownerName" placeholder="Repository owner name" />
		<FormikTextInput name="repositoryName" placeholder="Repository name" />
		<FormikTextInput name="rating" placeholder="Rating between 0 and 100" />
		<FormikTextInput name="text" placeholder="Review" multiline />
		<Pressable style={theme.primaryButton} onPress={onSubmit}>
			<Text style={{color: '#fff'}}>Create a review</Text>
		</Pressable>
		</View>
	);
};

const CreateReview = () => {
	const [createReview] = useCreateReview();
	const navigate = useNavigate();

	const onSubmit = async (values) => {
		const { repositoryName, ownerName, rating, text } = values;

		try {
			const repositoryId = await createReview(
				repositoryName,
				ownerName,
				parseInt(rating),
				text
			);

			navigate(`/repositories/${repositoryId}`);
		} catch (error) {
			console.log('Error at create review', error);
		}
	};

	return (
		<Formik
		initialValues={initialValues}
		onSubmit={onSubmit}
		validationSchema={validationSchema}
		>
		{({ handleSubmit }) => <CreateReviewForm onSubmit={handleSubmit} />}
		</Formik>
	);
};

export default CreateReview;
