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
import theme from '../core/theme';

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

const styles = StyleSheet.create({
  view: {
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
  divider: {
    backgroundColor: theme.colors.ourgreen,
    height: 6,
  },
  sec_view: {
    height: screenHeight - 130,
    justifyContent: 'space-evenly',
    width: screenWidth,
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
    marginLeft: screenWidth - 310,
    height: 30,
  },
  nBtnText: {
    paddingTop: 5,
    alignSelf: 'center',
  },
  nBtn2: {
    width: 30,
    elevation: 8,
    backgroundColor: theme.colors.white,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: theme.colors.button_border,
    marginLeft: screenWidth - 310,
    height: 30,
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
  btn_disabled: {
    backgroundColor: '#bbb',
  },
});

const AddInfoScreen = () => {
  const navigation = useNavigation();
  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }, []);

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
  const [stroke, setStroke] = React.useState(0);

  const onCountPress = () => {
    setStroke(stroke + 1);
  };

  return (
    <View style={styles.view}>
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
      <Divider style={styles.divider} />
      <View style={styles.sec_view}>
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
            <TouchableOpacity style={styles.nBtn} onPress={onEnterPressed}>
              <Text style={styles.nBtnText}> {stroke} </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.nBtn} onPress={onCountPress}>
              <Text style={styles.nBtnText}> + </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.info_view2}>
          <Text style={styles.info_text}> Putts </Text>
          <TouchableOpacity style={styles.nBtn} onPress={onEnterPressed}>
            <Text style={styles.nBtnText}> + </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.info_view3}>
          <Text style={styles.info_text}> Sand Shots</Text>
          <TouchableOpacity style={styles.nBtn} onPress={onEnterPressed}>
            <Text style={styles.nBtnText}> + </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.info_view4}>
          <Text style={styles.info_text}> Penalties </Text>
          <TouchableOpacity style={styles.nBtn} onPress={onEnterPressed}>
            <Text style={styles.nBtnText}> + </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.info_view5}>
          <Text style={styles.info_text}> Fairways </Text>
          <TouchableOpacity style={styles.nBtn} onPress={onEnterPressed}>
            <Text style={styles.nBtnText}> + </Text>
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
      </View>
    </View>
  );
};

export default AddInfoScreen;
