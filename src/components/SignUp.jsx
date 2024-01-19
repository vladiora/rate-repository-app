import { Formik } from 'formik';
import { Pressable, View } from 'react-native';
import * as yup from 'yup';

import FormikTextInput from './FormikTextInput';
import Text from './Text';
import useSignUp from '../hooks/useSignUp';
import useSignIn from '../hooks/useSignIn';
import { useNavigate } from 'react-router-native';
import theme from '../theme';

const initialValues = {
	username: '',
	password: '',
	passwordConfirmation: '',
};

const validationSchema = yup.object().shape({
	username: yup.string().min(5).max(50).required('Username is required'),
	password: yup.string().min(5).max(50).required('Password is required'),
	passwordConfirmation: yup
		.string()
		.test('passwords-match', 'Passwords must match', function (value) {
		return this.parent.password === value;
		}),
});

const SignUpForm = ({ onSubmit }) => {
	return (
		<View style={theme.whiteCnt}>
		<FormikTextInput name="username" placeholder="Username" />
		<FormikTextInput name="password" placeholder="Password" secureTextEntry />
		<FormikTextInput
			name="passwordConfirmation"
			placeholder="Password Confirmation"
			secureTextEntry
		/>
		<Pressable style={theme.primaryButton} onPress={onSubmit}>
			<Text fontWeight="bold" fontSize='fontSizeSubheading' style={{color: '#fff'}}>Sign Up</Text>
		</Pressable>
		</View>
	);
};

const SignUp = () => {
	const { signUp } = useSignUp();
	const [signIn] = useSignIn();
	const navigate = useNavigate();

	const onSubmit = async (values) => {
		const { username, password } = values;

		try {
			await signUp(username, password);
			await signIn({ username, password });
			navigate('/repositories');
		} catch (error) {
			console.log('Error at sign up', error);
		}
	};

	return (
		<Formik
		initialValues={initialValues}
		onSubmit={onSubmit}
		validationSchema={validationSchema}
		>
			{({ handleSubmit }) => <SignUpForm onSubmit={handleSubmit} />}
		</Formik>
	);
};

export default SignUp;
