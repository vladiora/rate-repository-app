import { View } from "react-native";
import Text from "./Text";

const CountItem = ({countNum, text}) => {

    return <View style={{flexDirection: 'column', alignItems: 'center'}}>
                <Text fontWeight='bold'>{countNum}</Text>
                <Text color='textSecondary'>{text}</Text>
            </View>;
};

export default CountItem;
