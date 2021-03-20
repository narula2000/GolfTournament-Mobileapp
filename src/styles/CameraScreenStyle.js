import { StyleSheet, Dimensions } from 'react-native';
import theme from '../core/theme';

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: theme.colors.secondary,
    borderRadius: 20,
    height: 45,
    justifyContent: 'center',
    alignContent: 'center',
    marginVertical: 20,
    width: 200,
  },
  buttontext: {
    fontSize: 15,
    fontWeight: 'bold',
    color: theme.colors.white,
  },
});
export default styles;
