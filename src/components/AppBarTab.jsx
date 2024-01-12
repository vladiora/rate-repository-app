import {Pressable} from 'react-native';
import Text from './Text';

const AppBarTab = ({tabText}) => {

    const onPressFunction = () => {};

    return <Pressable onPress={onPressFunction}>
                <Text fontSize='heading' style={{color: '#FFFFFF'}}>{tabText}</Text>
            </Pressable>;
};

export default AppBarTab;