import { Pressable, View, StyleSheet } from 'react-native';
import FormikTextInput from './FormikTextInput';
import { Formik } from 'formik';
import Text from './Text';
import theme from '../theme';
import useSignIn from '../hooks/useSignIn';
import * as yup from 'yup';
import { useNavigate } from 'react-router-native';

const initialValues = {
  username: '',
  password: '',
};

const validationSchema = yup.object().shape({
  username: yup.string()
              .min(3, 'Username must be at least 3 characters')
              .required('Username is required.'),
  password: yup.string()
              .min(6, 'Password must be at least 6 characters')
              .required('Password is required.')
})

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  button: {
    backgroundColor: theme.colors.primary,
    padding: 10,
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 16,
  },
});

const SignInForm = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <View>
        <FormikTextInput name="username" placeholder="Username" />
      </View>
      <View>
        <FormikTextInput
          name="password"
          placeholder="Password"
          secureTextEntry
        />
      </View>
      <Pressable style={styles.button} onPress={onSubmit}>
        <Text fontSize='fontSizeSubheading' style={{color: '#fff'}}>Sign in</Text>
      </Pressable>
    </View>
  );
};

export const SignInContainer = ({ signIn, navigate }) => {

  const onSubmit = async (values) => {
    const { username, password } = values;

    console.log(username + ' is signed in.');

    try {
      await signIn({ username, password });
      navigate('/repositories');
    } catch (error) {
      console.log(error);
    }
  };

  return <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
            {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
        </Formik>;
}

const SignIn = () => {
  const [signIn] = useSignIn();
  const navigate = useNavigate();

  return <SignInContainer signIn={signIn} navigate={navigate} />;
};

export default SignIn;
