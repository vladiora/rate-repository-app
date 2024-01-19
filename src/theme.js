import { Platform } from 'react-native';

const theme = {
    colors: {
      textPrimary: '#24292e',
      textSecondary: '#586069',
      primary: '#0366d6',
      textLight: '#888'
    },
    fontSizes: {
      body: 14,
      subheading: 16,
      heading: 18
    },
    fonts: {
      main: Platform.select({
        ios: 'Arial',
        android: 'Roboto',
        default: 'System'
      }),
    },
    fontWeights: {
      normal: '400',
      bold: '700',
    },
    primaryButton: {
      backgroundColor: '#0366d6',
      padding: 10,
      alignItems: 'center',
      borderRadius: 5,
      marginTop: 16,
    }
};

export default theme;
