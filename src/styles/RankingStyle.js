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
  },
  image: {
    height: 120,
    position: 'relative',
    marginBottom: 12,
    marginTop: 60,
    marginLeft: 65,
    width: 128,
    alignItems: 'center',
    zIndex: 2,
  },
  backBtn: {
    width: 70,
    flexDirection: 'row',
    marginLeft: 5,
    borderRadius: 10,
    height: 30,
    alignItems: 'center',
  },
  // nBtn: {
  //   width: 103,
  //   borderWidth: 1,
  //   flexDirection: 'row',
  //   alignItems: 'center',
  //   marginLeft: 40,
  //   backgroundColor: theme.colors.secondary,
  //   borderRadius: 10,
  //   borderColor: theme.colors.background,
  //   height: 40,
  //   marginVertical: 10,
  // },
  searchBar: {
    backgroundColor: theme.colors.background,
    marginTop: 50,
    borderWidth: 0.25,
    borderRadius: 0,
    borderColor: theme.colors.button_border,
    width: 'auto',
    elevation: 0,
    height: 45,
  },
  table: {
    backgroundColor: theme.colors.background,
    width: screenWidth,
    height: screenHeight - 152,
    marginTop: 0,
    justifyContent: 'center',
  },
  evenRow: {
    backgroundColor: '#b7e2a7',
  },
  oddRow: {
    backgroundColor: theme.colors.background,
  },
  column1: {
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 15,
    fontWeight: 'bold',
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
