import { Link } from "react-router-native";
import Text from './Text';

const AppBarTab = ({tabText, path}) => {

    return <Link to={path}>
                <Text fontSize='heading' style={{color: '#FFFFFF', marginRight: 10}}>{tabText}</Text>
            </Link>;
};

export default AppBarTab;