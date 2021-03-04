import React from 'react';
import { View, StyleSheet, Image, TextInput, Dimensions } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
// import { useNavigation } from "@react-navigation/native";
import {
  Appbar,
  Button,
  Card,
  Divider,
  Text,
  Title,
  Paragraph,
} from 'react-native-paper';
import Logo from '../components/Logo';
import Background from '../components/Background';
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
  },
  info_view: {
    flexDirection: 'row',
    marginTop: 25,
  },
  info_text: {
    fontSize: 20,
    marginLeft: 20,
  },
  counter_button: {
    backgroundColor: theme.colors.white,
    borderRadius: 10,
    marginLeft: 20,
    borderColor: theme.colors.button_border,
    width: 'auto',
  },
  cbtn_icon: {
    color: 'black',
    justifyContent: 'center',
  },
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
});

const AddInfoScreen = () => {
  // const { navigate } = useNavigation();
  const onEnterPressed = () => {
    console.log('button pressed');
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
        <View style={styles.info_view}>
          <Text style={styles.info_text}> Total Stroke</Text>
          <Button
            icon="minus"
            style={styles.counter_button}
            mode="outlined"
            labelStyle={styles.cbtn_icon}
            onPress={onEnterPressed}
          >
            {' '}
          </Button>
        </View>
        <View style={styles.info_view}>
          <Text style={styles.info_text}> Putts </Text>
          <Button
            icon="minus"
            style={styles.counter_button}
            mode="outlined"
            labelStyle={styles.cbtn_icon}
            onPress={onEnterPressed}
          >
            {' '}
          </Button>
          <Divider style={styles.divider} />
        </View>
        <View style={styles.info_view}>
          <Text style={styles.info_text}> Sand Shots</Text>
          <Button
            icon="minus"
            style={styles.counter_button}
            mode="outlined"
            labelStyle={styles.cbtn_icon}
            onPress={onEnterPressed}
          >
            {' '}
          </Button>
        </View>
        <View style={styles.info_view}>
          <Text style={styles.info_text}> Penalties </Text>
          <Button
            icon="minus"
            style={styles.counter_button}
            mode="outlined"
            labelStyle={styles.cbtn_icon}
            onPress={onEnterPressed}
          >
            {' '}
          </Button>
        </View>
        <View style={styles.info_view}>
          <Text style={styles.info_text}> Fairways </Text>
          <Button
            icon="minus"
            style={styles.counter_button}
            mode="outlined"
            labelStyle={styles.cbtn_icon}
            onPress={onEnterPressed}
          >
            {' '}
          </Button>
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
          onPress={onEnterPressed}
        >
          Submit
        </Button>
        <Button
          style={styles.button}
          labelStyle={styles.buttontext}
          mode="contained"
          onPress={onEnterPressed}
        >
          Back to Score Page
        </Button>
      </View>
    </View>
  );
};

export default AddInfoScreen;
