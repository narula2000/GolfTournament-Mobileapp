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
    height: 'auto',
  },
  rightcontainer: {
    backgroundColor: theme.colors.white,
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  leftheadertext: {
    fontSize: 20,
    marginLeft: 20,
    padding: 24,
    width: 170,
  },
  moveright: {
    marginLeft: screenWidth - 260,
    padding: 20,
    flexDirection: 'row',
  },
  iconmoveright: {
    padding: 20,
    flexDirection: 'row',
  },
  nBtn: {
    width: 30,
    borderWidth: 1,
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
    borderWidth: 1,
    backgroundColor: theme.colors.white,
    borderRadius: 10,
    borderColor: theme.colors.button_border,
    height: 40,
  },
  nBtnText2: {
    padding: 10,
    alignSelf: 'center',
  },
  card: {
    width: 80,
    backgroundColor: theme.colors.white,
    borderColor: theme.colors.button_border,
    height: 60,
    marginLeft: 20,
    borderWidth: 1,
  },
  carddivider: {
    color: theme.colors.button_border,
    height: 2,
  },
  button: {
    backgroundColor: theme.colors.secondary,
    height: 50,
    justifyContent: 'center',
  },
  buttontext: {
    fontSize: 15,
    fontWeight: 'bold',
    justifyContent: 'center',
  },
  btn_view_info: {
    flexDirection: 'row',
    marginLeft: 10,
    marginBottom: 20,
    justifyContent: 'space-evenly',
  },
  btn_change: {
    backgroundColor: theme.colors.button_border,
    borderRadius: 10,
  },
  btn_changeE: {
    backgroundColor: theme.colors.white,
    borderRadius: 10,
  },
  btn_changeP: {
    backgroundColor: theme.colors.ourgreen,
    borderRadius: 10,
  },
  roundButton: {
    marginVertical: 5,
    width: 30,
    height: 30,
    // marginLeft: screenWidth - 370,
    marginLeft: 10,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    borderWidth: 1,
    borderColor: theme.colors.button_border,
    backgroundColor: theme.colors.white,
  },
  roundButtonPressed: {
    marginVertical: 5,
    width: 30,
    height: 30,
    marginLeft: 20,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    borderWidth: 1,
    borderColor: theme.colors.button_border,
    backgroundColor: 'blue',
    shadowColor: theme.colors.white,
  },
});

export default styles;
