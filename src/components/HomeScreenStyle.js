import { StyleSheet, Dimensions } from 'react-native';
import theme from '../core/theme';

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    width: screenWidth,
    height: screenHeight,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
    padding: 3,
  },
  appbar: {
    backgroundColor: theme.colors.background,
    height: 100,
    width: screenWidth,
    flexDirection: 'row',
  },
  divider: { backgroundColor: theme.colors.ourgreen, height: 6 },
  card: {
    backgroundColor: theme.colors.ourgreen,
    height: 80,
    width: screenWidth - 140,
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: 120,
    position: 'relative',
    width: 128,
    zIndex: 2,
  },
  button: {
    backgroundColor: theme.colors.secondary,
    borderRadius: 20,
    height: 59,
    justifyContent: 'center',
    marginVertical: 20,
    width: 'auto',
  },
  buttontext: {
    fontSize: 15,
    fontWeight: 'bold',
    color: theme.colors.white,
  },
  title: {
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  roundButton: {
    marginVertical: 5,
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 100,
    backgroundColor: theme.colors.button_border,
  },
});
export default styles;
