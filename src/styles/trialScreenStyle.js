import { StyleSheet, Dimensions } from 'react-native';
import theme from '../core/theme';

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    width: screenWidth,
    height: screenHeight,
    backgroundColor: theme.colors.white,
  },
  appbar: {
    backgroundColor: theme.colors.background,
    height: 110,
    width: screenWidth,
    flexDirection: 'row',
  },
  image: {
    height: 120,
    position: 'relative',
    marginBottom: 12,
    marginTop: 10,
    width: 128,
    zIndex: 2,
  },
  appbar_card: {
    backgroundColor: theme.colors.ourgreen,
    height: 80,
    width: screenWidth - 200,
    marginLeft: 15,
  },
  appbar_card_text: {
    textAlign: 'center',
    marginTop: -5,
    fontSize: 18,
    fontWeight: 'bold',
  },
  appbar_card_subtext: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  divider: { backgroundColor: theme.colors.ourgreen, height: 6 },
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: theme.colors.secondary,
  },
  leftcontainer: {
    backgroundColor: theme.colors.white,
    flex: 1,
    flexDirection: 'column',
    width: screenWidth / 2,
  },
  rightcontainer: {
    backgroundColor: theme.colors.secondary,
    flex: 1,
    flexDirection: 'row',
    width: screenWidth / 2,
  },
  leftheadertext: {
    fontSize: 20,
    marginLeft: 20,
    padding: 20,
  },
  nBtn: {
    width: 30,
    backgroundColor: theme.colors.white,
    borderRadius: 10,
    borderColor: theme.colors.button_border,
    height: 30,
  },
  nBtnText: {
    padding: 5,
    alignSelf: 'center',
  },
  nBtn2: {
    width: 80,
    elevation: 8,
    backgroundColor: theme.colors.white,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: theme.colors.button_border,
    height: 40,
  },
  card: {
    width: 80,
    backgroundColor: theme.colors.white,
    borderColor: theme.colors.button_border,
    height: 60,
    marginLeft: 20,
  },
  carddivider: {
    color: theme.colors.button_border,
    height: 2,
  },
});

export default styles;
