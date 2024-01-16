import { Pressable, View, StyleSheet } from 'react-native';
import FormikTextInput from './FormikTextInput';
import { Formik } from 'formik';
import Text from './Text';
import theme from '../theme';

const initialValues = {
  username: '',
  password: '',
};

const SignIn = () => {

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

  const onSubmit = (values) => {
    console.log(values);
  };

  return <Formik initialValues={initialValues} onSubmit={onSubmit}>
            <View style={styles.container}>
              <FormikTextInput name="username" placeholder="Username" />
              <FormikTextInput name="password" placeholder="Password" secureTextEntry />
              <Pressable style={styles.button} onPress={onSubmit}>
                <Text fontSize='fontSizeSubheading' style={{color: '#fff'}}>Sign in</Text>
              </Pressable>
            </View>
        </Formik>;
};

export default SignIn;
