import { StyleSheet, Dimensions } from 'react-native';
import theme from '../core/theme';

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

const styles = StyleSheet.create({
  view: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
  },
  appbar: {
    backgroundColor: theme.colors.background,
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: 120,
    position: 'relative',
    marginBottom: 12,
    marginTop: 60,
    width: 128,
    alignItems: 'center',
    zIndex: 2,
  },
  table: {
    backgroundColor: theme.colors.background,
    width: screenWidth,
    height: screenHeight - 200,
    marginTop: 50,
    justifyContent: 'center',
  },
  column1: {
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: theme.colors.secondary,
    borderRadius: 20,
    height: 30,
    justifyContent: 'center',
    marginVertical: 10,
    marginLeft: 90,
    width: 230,
  },
  buttontext: {
    fontSize: 12,
    fontWeight: 'bold',
    justifyContent: 'center',
  },
});

export default styles;
