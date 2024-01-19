import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import AppBarTab from './AppBarTab';
import useSignOut from '../hooks/useSignOut';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    padding: 20,
    backgroundColor: '#24292e'
  },
  contentContainer: {
    flexDirection: 'row',
    paddingHorizontal: 10
  }
});

const AppBar = ({ me }) => {
  const signOut = useSignOut();

  return <View style={styles.container}>
          <ScrollView horizontal contentContainerStyle={styles.contentContainer}>
            <AppBarTab tabText='Repositories' path='/'></AppBarTab>
            {me && <AppBarTab tabText="Create Review" path="/createReview" />}
            {me && <AppBarTab tabText="My Reviews" path="/myReviews" />}
            {!me ? (
              <AppBarTab tabText="Sign In" path="/signIn" />
            ) : (
              <AppBarTab tabText="Sign Out" path="/signIn" onPress={signOut} />
            )}
            {!me && <AppBarTab tabText="Sign Up" path="/signUp" />}
          </ScrollView>
        </View>;
};

export default AppBar;
