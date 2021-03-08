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
  container: {
    // height: screenHeight - 130,
    justifyContent: 'space-evenly',
    width: screenWidth,
    flex: 1,
    flexDirection: 'column',
  },
  divider: { backgroundColor: theme.colors.ourgreen, height: 6 },
  info_view1: {
    flexDirection: 'row',
    marginTop: 25,
    width: screenWidth,
  },
  card: {
    width: 80,
    backgroundColor: theme.colors.white,
    borderColor: theme.colors.button_border,
    borderWidth: 2,
  },
  carddivider: {
    color: theme.colors.button_border,
    height: 3,
  },
  info_text: {
    fontSize: 20,
    marginLeft: 20,
  },
  info_view2: {
    flexDirection: 'row',
    marginTop: 40,
    width: screenWidth,
  },
  info_view3: {
    flexDirection: 'row',
    marginTop: 25,
    width: screenWidth,
  },
  info_view4: {
    flexDirection: 'row',
    marginTop: 25,
    width: screenWidth,
  },
  info_view5: {
    flexDirection: 'row',
    marginTop: 25,
    width: screenWidth,
  },
  nBtn: {
    width: 30,
    elevation: 8,
    backgroundColor: theme.colors.white,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: theme.colors.button_border,
    marginLeft: screenWidth - 350,
    height: 30,
  },
  nBtn2: {
    width: 80,
    elevation: 8,
    backgroundColor: theme.colors.white,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: theme.colors.button_border,
    marginLeft: screenWidth - 350,
    height: 40,
  },
  nBtnText2: {
    paddingTop: 10,
    alignSelf: 'center',
  },
  nBtnText: {
    paddingTop: 5,
    alignSelf: 'center',
  },
  btn_view_info: {
    flexDirection: 'row',
    marginLeft: 10,
    marginTop: 30,
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
  button: {
    backgroundColor: theme.colors.secondary,
    borderRadius: 20,
    height: 40,
    justifyContent: 'center',
    marginTop: 20,
    marginVertical: 10,
    marginLeft: 90,
    width: 230,
  },
  buttontext: {
    fontSize: 15,
    fontWeight: 'bold',
    justifyContent: 'center',
  },
  roundButton: {
    marginVertical: 5,
    width: 30,
    height: 30,
    marginLeft: screenWidth - 370,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    borderWidth: 2,
    borderColor: theme.colors.button_border,
    backgroundColor: theme.colors.white,
  },
  roundButtonPressed: {
    marginVertical: 5,
    width: 30,
    height: 30,
    marginLeft: screenWidth - 370,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    borderWidth: 2,
    borderColor: theme.colors.button_border,
    backgroundColor: 'blue',
    shadowColor: theme.colors.white,
  },
});

export default styles;
