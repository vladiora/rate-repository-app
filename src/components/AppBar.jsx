import { View, StyleSheet} from 'react-native';
import Constants from 'expo-constants';
import AppBarTab from './AppBarTab';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    backgroundColor: '#24292e'
  },
});

const AppBar = () => {
  return <View style={styles.container}>
            <AppBarTab tabText='Repositories'></AppBarTab>
        </View>;
};

export default AppBar;
