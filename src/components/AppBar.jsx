import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import AppBarTab from './AppBarTab';

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

const AppBar = () => {
  return <View style={styles.container}>
          <ScrollView horizontal contentContainerStyle={styles.contentContainer}>
            <AppBarTab tabText='Repositories' path='/'></AppBarTab>
            <AppBarTab tabText='Sign in' path='/login'></AppBarTab>
          </ScrollView>
        </View>;
};

export default AppBar;
