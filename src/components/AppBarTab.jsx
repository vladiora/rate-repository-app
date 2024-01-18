import { Link } from "react-router-native";
import Text from './Text';

const AppBarTab = ({tabText, path, onPress}) => {

    return <Link to={path} onPress={onPress}>
                <Text fontSize='heading' style={{color: '#FFFFFF', marginRight: 10}}>{tabText}</Text>
            </Link>;
};

export default AppBarTab;