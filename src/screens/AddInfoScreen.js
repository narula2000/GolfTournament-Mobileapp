import React, { useEffect } from 'react';
import {
  View,
  StyleSheet,
  Image,
  Dimensions,
  LogBox,
  TouchableOpacity,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useNavigation } from '@react-navigation/native';
import {
  Appbar,
  Button,
  Card,
  Divider,
  Text,
  Title,
  Paragraph,
} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
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
  info_view1: {
    flexDirection: 'row',
    marginTop: 25,
    width: screenWidth,
  },
  info_text: {
    fontSize: 20,
    marginLeft: 20,
  },
  info_view2: {
    flexDirection: 'row',
    marginTop: 25,
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

  //   counter_button: {
  //     backgroundColor: theme.colors.ourgreen,
  //     height: 1,
  //     borderRadius: 10,
  //     marginLeft: screenWidth - 200,
  //     borderColor: theme.colors.primary,
  //     width: 2,
  //   },
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
  nBtnText: {
    paddingTop: 5,
    alignSelf: 'center',
  },
  //   buttons: {
  //     backgroundColor: theme.colors.white,
  //     borderRadius: 20,
  //     borderColor: theme.colors.button_border,
  //     height: 50,
  //     marginLeft: screenWidth - 200,
  //     justifyContent: 'center',
  //     width: 10,
  //   },
  //   cbtn_text: {
  //     color: 'black',
  //     justifyContent: 'center',
  //     fontSize: 15,
  //   },
  btn_view_info: {
    flexDirection: 'row',
    marginLeft: 10,
    marginTop: 30,
    justifyContent: 'space-evenly',
  },
  btn_change: {
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
  //   btn_disabled: {
  //     backgroundColor: '#bbb',
  //   },
  // //   card: {
  //     height: 60,
  //     width: 60,
  //     marginLeft: 20,
  //     backgroundColor: theme.colors.ourgreen,
  //   },
  //   big_btn: {
  //     flexDirection: 'row',
  //   },
});

const AddInfoScreen = () => {
  const navigation = useNavigation();
  //   useEffect(() => {
  //     LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  //   }, []);

  const onSubmitPressed = () => {
    console.log('button pressed');
    navigation.navigate('RankingScreen');
  };
  const onBackPressed = () => {
    console.log('button pressed');
    navigation.navigate('SignInScreen');
  };
  const onEnterPressed = () => {
    console.log('button pressed');
  };
  const par = 2;
  const [stroke, setStroke] = React.useState(par);
  const [putts, setPutts] = React.useState(par);
  const [sandShots, setSandShots] = React.useState(par);
  const [penalties, setPenalties] = React.useState(par);
  const [isPress1, setPressed1] = React.useState(false);
  const [isPress2, setPressed2] = React.useState(false);
  const [isPress3, setPressed3] = React.useState(false);
  const [isPress4, setPressed4] = React.useState(false);

  const onCountPress = () => {
    setStroke(stroke + 1);
    setPutts(putts + 1);
    setSandShots(sandShots + 1);
    setPenalties(penalties + 1);
  };
  const onMinusPress = () => {
    setStroke(stroke - 1);
    setPutts(putts - 1);
    setSandShots(sandShots - 1);
    setPenalties(penalties - 1);
  };
  const changeColor1 = () => {
    setPressed1(true);
    setPressed2(false);
    setPressed3(false);
    setPressed4(false);
  };
  const changeColor2 = () => {
    setPressed1(false);
    setPressed2(true);
    setPressed3(false);
    setPressed4(false);
  };
  const changeColor3 = () => {
    setPressed1(false);
    setPressed2(false);
    setPressed3(true);
    setPressed4(false);
  };
  const changeColor4 = () => {
    setPressed1(false);
    setPressed2(false);
    setPressed3(false);
    setPressed4(true);
  };

  return (
    <View style={styles.maincontainer}>
      <Appbar.Header style={styles.appbar}>
        <Image
          // eslint-disable-next-line global-require
          source={require('../assets/golf-logo-small.png')}
          style={styles.image}
        />
        <View>
          <Text> Hole 1 </Text>
          <Text> Par 3</Text>
          <Text> S.I 9</Text>
        </View>
        <Card style={styles.appbar_card}>
          <Card.Content>
            <Title style={styles.appbar_card_text}> Chakeera Cutie </Title>
            <Paragraph style={styles.appbar_card_subtext}> To Par +4</Paragraph>
          </Card.Content>
        </Card>
      </Appbar.Header>
      <Divider style={{ backgroundColor: theme.colors.ourgreen, height: 6 }} />
      <View style={styles.container}>
        <View style={styles.info_view1}>
          <Text style={styles.info_text}> Total Stroke</Text>
          {/* <Button
            style={styles.buttons}
            labelStyle={styles.cbtn_text}
            mode="contained"
            onPress={onEnterPressed}
            title="press me"
          >
            <Text> + </Text>
          </Button> */}
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}
          >
            <TouchableOpacity style={styles.nBtn} onPress={onMinusPress}>
              <Text style={styles.nBtnText}> - </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.nBtn}>
              <Text style={styles.nBtnText}> {stroke} </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.nBtn} onPress={onCountPress}>
              <Text style={styles.nBtnText}> + </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.info_view2}>
          <Text style={styles.info_text}> Putts </Text>
          <TouchableOpacity style={styles.nBtn} onPress={onMinusPress}>
            <Text style={styles.nBtnText}> - </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.nBtn}>
            <Text style={styles.nBtnText}> {putts} </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.nBtn} onPress={onCountPress}>
            <Text style={styles.nBtnText}> + </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.info_view3}>
          <Text style={styles.info_text}> Sand Shots</Text>
          <TouchableOpacity style={styles.nBtn} onPress={onMinusPress}>
            <Text style={styles.nBtnText}> - </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.nBtn}>
            <Text style={styles.nBtnText}> {sandShots} </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.nBtn} onPress={onCountPress}>
            <Text style={styles.nBtnText}> + </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.info_view4}>
          <Text style={styles.info_text}> Penalties </Text>
          <TouchableOpacity style={styles.nBtn} onPress={onMinusPress}>
            <Text style={styles.nBtnText}> - </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.nBtn}>
            <Text style={styles.nBtnText}> {penalties} </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.nBtn} onPress={onCountPress}>
            <Text style={styles.nBtnText}> + </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.info_view5}>
          <Text style={styles.info_text}> Fairways </Text>
          <TouchableOpacity
            style={isPress1 ? styles.roundButtonPressed : styles.roundButton}
            onPress={changeColor1}
          >
            <Icon
              name="arrow-top-left"
              size={15}
              color={isPress1 ? 'white' : 'black'}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={isPress2 ? styles.roundButtonPressed : styles.roundButton}
            onPress={changeColor2}
          >
            <Icon
              name="circle-outline"
              size={15}
              color={isPress2 ? 'white' : 'black'}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={isPress3 ? styles.roundButtonPressed : styles.roundButton}
            onPress={changeColor3}
          >
            <Icon
              name="arrow-top-right"
              size={15}
              color={isPress3 ? 'white' : 'black'}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={isPress4 ? styles.roundButtonPressed : styles.roundButton}
            onPress={changeColor4}
          >
            <Icon
              name="arrow-down"
              size={15}
              color={isPress4 ? 'white' : 'black'}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.btn_view_info}>
          <Button
            mode="contained"
            onPress={onEnterPressed}
            style={styles.btn_change}
          >
            GIR
          </Button>
          <Button
            mode="contained"
            onPress={onEnterPressed}
            style={styles.btn_change}
          >
            Sand Saves
          </Button>
          <Button
            mode="contained"
            onPress={onEnterPressed}
            style={styles.btn_change}
          >
            Up & DOwn
          </Button>
        </View>
        <Button
          style={styles.button}
          labelStyle={styles.buttontext}
          mode="contained"
          onPress={onSubmitPressed}
        >
          Submit
        </Button>
        <Button
          style={styles.button}
          labelStyle={styles.buttontext}
          mode="contained"
          onPress={onBackPressed}
        >
          Back to Score Page
        </Button>
        {/* <Card style={styles.card}>
        <Card.Actions>
          <TouchableOpacity style={styles.nBtn}>
            <Text style={styles.nBtnText}> + </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.nBtn}>
            <Text style={styles.nBtnText}> + </Text>
          </TouchableOpacity>
        </Card.Actions>
      </Card> */}
      </View>
    </View>
  );
};

export default AddInfoScreen;
