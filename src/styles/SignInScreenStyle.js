import { StyleSheet, Dimensions } from 'react-native';
import theme from '../core/theme';

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

const styles = StyleSheet.create({
  maincontainer: {
    backgroundColor: theme.colors.background,
    flex: 1,
    width: screenWidth,
    height: screenHeight,
  },
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    width: '100%',
  },
  button: {
    backgroundColor: theme.colors.secondary,
    borderRadius: 20,
    height: 45,
    justifyContent: 'center',
    marginVertical: 20,
    width: 'auto',
  },
  buttontext: {
    fontSize: 15,
    fontWeight: 'bold',
    color: theme.colors.white,
  },
  textinput: {
    fontSize: 15,
    fontWeight: 'bold',
    backgroundColor: theme.colors.white,
    width: screenWidth - 100,
  },
  text: { fontWeight: 'bold', fontSize: 20, padding: 10 },
  image: {
    height: 200,
    marginBottom: 12,
    width: 200,
  },
});

export default styles;
