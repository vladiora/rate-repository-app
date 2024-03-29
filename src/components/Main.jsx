import Constants from 'expo-constants';
import { StyleSheet, View } from 'react-native';
import RepositoryList from './RepositoryList';
import AppBar from './AppBar';
import useMe from '../hooks/useMe';
import { Route, Routes, Navigate } from 'react-router-native';
import SignIn from './SignIn';
import RepositoryItemContainer from './RepositoryList/RepositoryItemContainer';
import CreateReview from './CreateReview';
import SignUp from './SignUp';
import MyReviews from './MyReviews';

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: '#e1e4e8'
  },
});

const Main = () => {
  const [me] = useMe();

  return (
    <View style={styles.container}>
      <AppBar me={me} />
      <Routes>
        <Route path="/" element={<RepositoryList />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/createReview" element={<CreateReview />} />
        <Route path="/myReviews" element={<MyReviews />} />
        <Route path='/signIn' element={<SignIn />} />
        <Route
          path="/repositories/:id"
          element={<RepositoryItemContainer />}
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </View>
  );
};

export default Main;
