import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
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
import styles from '../styles/InfoScreenStyle';

const InfoScreen = () => {
  const navigation = useNavigation();

  const onSubmitPressed = () => {
    console.log('button pressed');
    navigation.navigate('RankingScreen');
  };
  const onBackPressed = () => {
    console.log('button pressed');
    navigation.navigate('SignInScreen');
  };
  const par = 2;
  const [stroke, setStroke] = React.useState(par);
  const [putts, setPutts] = React.useState(0);
  const [sandShots, setSandShots] = React.useState(0);
  const [penalties, setPenalties] = React.useState(0);
  const [showStroke, setShowStroke] = React.useState(false);
  const [showPutt, setShowPutt] = React.useState(false);
  const [showSandShots, setShowSandShots] = React.useState(false);
  const [showPenalty, setShowPenalty] = React.useState(false);
  const [isLeft, setLeft] = React.useState(false);
  const [isOn, setOn] = React.useState(false);
  const [isRight, setRight] = React.useState(false);
  const [isHazard, setHazard] = React.useState(false);
  const [isGIRActive, setGIR] = React.useState(false);
  const [isSSActive, setSandSaves] = React.useState(false);
  const [enableSS, setEnabledSS] = React.useState(false);
  const [isUDActive, setUpDown] = React.useState(false);

  const onCountPress = () => {
    setStroke(stroke + 1);
    setShowStroke(true);
  };
  const onMinusPress = () => {
    setStroke(stroke - 1);
    if (stroke - 1 <= 0) {
      setShowStroke(false);
    }
  };
  const changeToLeft = () => {
    setLeft(true);
    setOn(false);
    setRight(false);
    setHazard(false);
  };
  const changeToOn = () => {
    setLeft(false);
    setOn(true);
    setRight(false);
    setHazard(false);
  };
  const changeToRight = () => {
    setLeft(false);
    setOn(false);
    setRight(true);
    setHazard(false);
  };
  const changeToHazard = () => {
    setLeft(false);
    setOn(false);
    setRight(false);
    setHazard(true);
  };

  const changeGIR = () => {
    setGIR(!isGIRActive);
  };
  const changeSS = () => {
    if (sandShots > 0) {
      setSandSaves(!isSSActive);
    } else {
      setSandSaves(false);
    }
  };
  const changeUD = () => {
    if (putts > 0) {
      setUpDown(!isUDActive);
    } else {
      setUpDown(false);
    }
  };
  const checkPuttonMinus = () => {
    setPutts(putts - 1);
    if (putts - 1 === 1) {
      setUpDown(true);
    } else {
      setUpDown(false);
    }
    if (putts - 1 <= 0) {
      setShowPutt(false);
    }
  };

  const checkPuttonPlus = () => {
    setShowPutt(true);
    setPutts(putts + 1);
    if (putts + 1 === 1) {
      setUpDown(true);
    } else {
      setUpDown(false);
    }
  };
  const sandShotOnMinus = () => {
    setSandShots(sandShots - 1);
    if (sandShots - 1 < 1) {
      setSandSaves(false);
    }
  };
  const sandShotOnPlus = () => {
    setShowSandShots(true);
    setEnabledSS(true);
    setSandShots(sandShots + 1);
    if (sandShots + 1 > 0) {
      setSandSaves(true);
    }
  };
  const penaltyOnMinus = () => {
    setPenalties(penalties - 1);
  };
  const penaltyOnPlus = () => {
    setShowPenalty(true);
    setPenalties(penalties + 1);
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
      <Divider style={styles.divider} />
      <View style={styles.container}>
        <View style={styles.info_view1}>
          <Text style={styles.info_text}> Total Stroke</Text>
          {showStroke ? (
            <View style={{ flexDirection: 'row' }}>
              <TouchableOpacity style={styles.nBtn} onPress={onMinusPress}>
                <Text style={styles.nBtnText}> - </Text>
              </TouchableOpacity>
              <Card style={styles.card}>
                <Button style={styles.nBtn_2} onPress={onCountPress}>
                  <Text> {stroke} | + </Text>
                </Button>
                <Divider style={styles.carddivider} />
                <Paragraph style={{ alignSelf: 'center' }}>
                  {' '}
                  {stroke}
                  Birdie{' '}
                </Paragraph>
                {/* <View>
                <TouchableOpacity style={styles.nBtn2} onPress={onCountPress}>
                  <Text style={styles.nBtnText2}> {stroke} | + </Text>
                </TouchableOpacity>
                <TextInput> </TextInput>
              </View> */}
              </Card>
            </View>
          ) : (
            <TouchableOpacity style={styles.nBtn} onPress={onCountPress}>
              <Text style={styles.nBtnText}> + </Text>
            </TouchableOpacity>
          )}
        </View>
        <View style={styles.info_view2}>
          <Text style={styles.info_text}> Putts </Text>
          {showPutt ? (
            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
              <TouchableOpacity style={styles.nBtn} onPress={checkPuttonMinus}>
                <Text style={styles.nBtnText}> - </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.nBtn2} onPress={checkPuttonPlus}>
                <Text style={styles.nBtnText2}> {putts} | + </Text>
              </TouchableOpacity>
            </View>
          ) : (
            <TouchableOpacity style={styles.nBtn} onPress={checkPuttonPlus}>
              <Text style={styles.nBtnText}> + </Text>
            </TouchableOpacity>
          )}
        </View>
        <View style={styles.info_view3}>
          <Text style={styles.info_text}> Sand Shots</Text>
          {showSandShots ? (
            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
              <TouchableOpacity style={styles.nBtn} onPress={sandShotOnMinus}>
                <Text style={styles.nBtnText}> - </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.nBtn2}>
                <Text style={styles.nBtnText2}> {sandShots} | + </Text>
              </TouchableOpacity>
            </View>
          ) : (
            <TouchableOpacity style={styles.nBtn} onPress={sandShotOnPlus}>
              <Text style={styles.nBtnText}> + </Text>
            </TouchableOpacity>
          )}
        </View>
        <View style={styles.info_view4}>
          <Text style={styles.info_text}> Penalties </Text>
          {showPenalty ? (
            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
              <TouchableOpacity style={styles.nBtn} onPress={penaltyOnMinus}>
                <Text style={styles.nBtnText}> - </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.nBtn2}>
                <Text style={styles.nBtnText2}> {penalties} | + </Text>
              </TouchableOpacity>
            </View>
          ) : (
            <TouchableOpacity style={styles.nBtn} onPress={penaltyOnPlus}>
              <Text style={styles.nBtnText}> + </Text>
            </TouchableOpacity>
          )}
        </View>
        <View style={styles.info_view5}>
          <Text style={styles.info_text}> Fairways </Text>
          <TouchableOpacity
            style={isLeft ? styles.roundButtonPressed : styles.roundButton}
            onPress={changeToLeft}
          >
            <Icon
              name="arrow-top-left"
              size={15}
              color={isLeft ? 'white' : 'black'}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={isOn ? styles.roundButtonPressed : styles.roundButton}
            onPress={changeToOn}
          >
            <Icon
              name="circle-outline"
              size={15}
              color={isOn ? 'white' : 'black'}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={isRight ? styles.roundButtonPressed : styles.roundButton}
            onPress={changeToRight}
          >
            <Icon
              name="arrow-top-right"
              size={15}
              color={isRight ? 'white' : 'black'}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={isHazard ? styles.roundButtonPressed : styles.roundButton}
            onPress={changeToHazard}
          >
            <Icon
              name="arrow-down"
              size={15}
              color={isHazard ? 'white' : 'black'}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.btn_view_info}>
          <Button
            mode="contained"
            onPress={changeGIR}
            style={isGIRActive ? styles.btn_changeP : styles.btn_change}
          >
            GIR
          </Button>
          {enableSS ? (
            <Button
              mode="contained"
              onPress={changeSS}
              style={isSSActive ? styles.btn_changeP : styles.btn_changeE}
              labelStyle={{ color: 'black' }}
            >
              Sand Saves
            </Button>
          ) : (
            <Button
              mode="contained"
              onPress={changeSS}
              style={styles.btn_change}
            >
              Sand Saves
            </Button>
          )}

          <Button
            mode="contained"
            onPress={changeUD}
            style={isUDActive ? styles.btn_changeP : styles.btn_change}
          >
            Up & Down
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

export default InfoScreen;