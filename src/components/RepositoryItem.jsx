import { View, StyleSheet, Image } from "react-native";
import Text from "./Text";
import theme from "../theme";
import CountItem from "./CountItem";

const RepositoryItem = ({fullName, description, language, stars, forks, review, rating, avatarUrl}) => {

    const styles = StyleSheet.create({
        container: {
          padding: 16,
          borderBottomWidth: 1,
          borderBottomColor: '#ccc',
          marginBottom: 8,
          backgroundColor: '#fff',
        },
        languageBackground: {
          backgroundColor: theme.colors.primary,
          borderRadius: 5,
          paddingVertical: 2,
          paddingHorizontal: 5,
          alignSelf: 'flex-start'
        },
        language: {
          color: '#fff'
        },
        margin: {
          marginBottom: 8,
        },
        infoContainer: {
          flexDirection: 'row',
          justifyContent: 'space-around',
        },
        rowContainer: {
          flexDirection: 'row',
          alignItems: 'stretch',
        },
        repoImage: {
          width: 50,
          height: 50,
          borderRadius: 10,
          marginRight: 8,
        },
    });

    const formatNumber = (num) => {
      if (num >= 1000) {
        return (num / 1000).toFixed(1) + 'k';
      }
      return num;
    };

    return <View style={styles.container}>
              <View style={styles.rowContainer}>
                {avatarUrl && <Image style={styles.repoImage} source={{ uri: avatarUrl }} />}
                <View style={{ flex: 1, marginBottom: 8 }}>
                  <Text fontSize='heading' fontWeight='bold' style={styles.margin}>{fullName}</Text>
                  <Text color='textSecondary' fontSize='subheading' style={styles.margin}>{description}</Text>
                  <View style={styles.languageBackground}>
                    <Text style={styles.language}>{language}</Text>
                  </View>
                </View>
              </View>
              <View style={styles.infoContainer}>
                <CountItem countNum={formatNumber(stars)} text='Stars'/>
                <CountItem countNum={formatNumber(forks)} text='Forks'/>
                <CountItem countNum={review} text='Reviews'/>
                <CountItem countNum={rating} text='Rating'/>
              </View>
            </View>;
};

export default RepositoryItem;
