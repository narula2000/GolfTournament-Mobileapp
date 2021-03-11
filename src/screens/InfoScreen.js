/* eslint-disable no-nested-ternary */
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
  Dialog,
  Portal,
} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from '../styles/InfoScreenStyle';

const InfoScreen = () => {
  const navigation = useNavigation();

  const [visible, setVisible] = React.useState(false);

  const hideDialog = () => setVisible(false);

  const proceedDialog = () => navigation.navigate('HomeScreen');

  const onSubmitPressed = () => {
    console.log('button pressed');
    setVisible(true);
  };
  const par = 3;
  const [stroke, setStroke] = React.useState(par);
  const [score, setScore] = React.useState(stroke - par);
  const [isBogey, setBogey] = React.useState(false);
  const [isPar, setPar] = React.useState(false);
  const [isBirdie, setBirdie] = React.useState(false);
  const [isEagle, setEagle] = React.useState(false);
  const [isBogeyUp, setBogeyUp] = React.useState(false);
  const [isAlbatross, setAlbatross] = React.useState(false);
  const [isHoleInOne, setHoleInOne] = React.useState(false);
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
  const [enableGIR, setEnabledGIR] = React.useState(false);
  const [isGIRActive, setGIR] = React.useState(false);
  const [isSSActive, setSandSaves] = React.useState(false);
  const [enableSS, setEnabledSS] = React.useState(false);
  const [enableUD, setEnabledUD] = React.useState(false);
  const [isUDActive, setUpDown] = React.useState(false);

  const changeStroke = () => {
    setShowStroke(true);
    if (stroke + 1 === 0) {
      setStroke(par);
    }
    setScore(0);
    setPar(true);
  };
  const strokeOnPlus = () => {
    setStroke(stroke + 1);
    if (stroke + 1 === 0) {
      setStroke(par);
    }
    setScore(stroke + 1 - par);
    if (score + 1 >= 2) {
      setBogeyUp(true);
      setBogey(false);
      setPar(false);
      setBirdie(false);
      setEagle(false);
      setAlbatross(false);
      setHoleInOne(false);
    }
    if (score + 1 === 1) {
      setBogey(true);
      setBogeyUp(false);
      setPar(false);
      setBirdie(false);
      setEagle(false);
      setAlbatross(false);
      setHoleInOne(false);
    }
    if (score + 1 === 0) {
      setPar(true);
      setBirdie(false);
      setEagle(false);
      setBogey(false);
      setBogeyUp(false);
      setAlbatross(false);
      setHoleInOne(false);
    }
    if (score + 1 === -1) {
      setBirdie(true);
      setEagle(false);
      setBogey(false);
      setBogeyUp(false);
      setPar(false);
      setAlbatross(false);
      setHoleInOne(false);
    }
    if (score + 1 === -2) {
      setEagle(true);
      setBogey(false);
      setBogeyUp(false);
      setPar(false);
      setBirdie(false);
      setAlbatross(false);
      setHoleInOne(false);
    }
    if (score + 1 === -3) {
      setEagle(false);
      setBogey(false);
      setBogeyUp(false);
      setPar(false);
      setBirdie(false);
      setAlbatross(true);
      setHoleInOne(false);
    }
    if (score + 1 <= -4) {
      setEagle(true);
      setBogey(false);
      setBogeyUp(false);
      setPar(false);
      setBirdie(false);
      setAlbatross(false);
      setHoleInOne(true);
    }
    if (stroke + 1 - putts <= par - 2) {
      setGIR(true);
    } else {
      setGIR(false);
    }
    console.log(stroke + 1);
    console.log(score + 1);
  };
  const strokeOnMinus = () => {
    setStroke(stroke - 1);
    if (stroke - 1 === 0) {
      setStroke(par);
    }
    if (stroke - 1 <= 0) {
      setShowStroke(false);
    }
    setScore(stroke - 1 - par);
    if (score - 1 >= 2) {
      setBogeyUp(true);
      setBogey(false);
      setPar(false);
      setBirdie(false);
      setEagle(false);
      setAlbatross(false);
      setHoleInOne(false);
    }
    if (score - 1 === 1) {
      setBogey(true);
      setBogeyUp(false);
      setPar(false);
      setBirdie(false);
      setEagle(false);
      setAlbatross(false);
      setHoleInOne(false);
    }
    if (score - 1 === 0) {
      setPar(true);
      setBirdie(false);
      setEagle(false);
      setBogey(false);
      setBogeyUp(false);
      setAlbatross(false);
      setHoleInOne(false);
    }
    if (score - 1 === -1) {
      setBirdie(true);
      setEagle(false);
      setBogey(false);
      setBogeyUp(false);
      setPar(false);
      setAlbatross(false);
      setHoleInOne(false);
    }
    if (score - 1 === -2) {
      if (stroke - 1 === 1) {
        setHoleInOne(true);
        setBirdie(false);
      } else {
        setEagle(true);
        setBogey(false);
        setBogeyUp(false);
        setPar(false);
        setBirdie(false);
        setAlbatross(false);
        setHoleInOne(false);
      }
    }
    if (score - 1 === -3) {
      if (stroke - 1 === 1) {
        setHoleInOne(true);
        setEagle(false);
      } else {
        setEagle(false);
        setBogey(false);
        setBogeyUp(false);
        setPar(false);
        setBirdie(false);
        setAlbatross(true);
        setHoleInOne(false);
      }
    }
    if (score - 1 <= -4) {
      setEagle(false);
      setBogey(false);
      setBogeyUp(false);
      setPar(false);
      setBirdie(false);
      setAlbatross(false);
      setHoleInOne(true);
    }
    if (stroke - 1 - putts <= par - 2) {
      setGIR(true);
    } else {
      setGIR(false);
    }
    console.log(stroke - 1);
    console.log(score - 1);
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
  const changePuttButton = () => {
    setShowPutt(true);
    setEnabledUD(true);
    setEnabledGIR(true);
    setPutts(1);
    setUpDown(true);
    if (sandShots > 0) {
      setSandSaves(true);
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
      setEnabledUD(false);
      setEnabledGIR(false);
    }
    if (sandShots > 0 && putts - 1 === 1) {
      setSandSaves(true);
    } else {
      setSandSaves(false);
    }
    if (stroke - putts + 1 <= par - 2) {
      setGIR(true);
    } else {
      setGIR(false);
    }
  };

  const checkPuttonPlus = () => {
    setPutts(putts + 1);
    if (putts + 1 === 1) {
      setUpDown(true);
    } else {
      setUpDown(false);
    }
    if (sandShots > 0 && putts + 1 === 1) {
      setSandSaves(true);
    } else {
      setSandSaves(false);
    }
    if (stroke - putts - 1 <= par - 2) {
      setGIR(true);
    } else {
      setGIR(false);
    }
  };
  const changeSandShotButton = () => {
    setShowSandShots(true);
    setEnabledSS(true);
    setSandShots(1);
    if (putts === 1) {
      setSandSaves(true);
    } else {
      setSandSaves(false);
    }
  };
  const sandShotOnMinus = () => {
    setSandShots(sandShots - 1);
    if (sandShots - 1 < 1) {
      setSandSaves(false);
      setShowSandShots(false);
      setEnabledSS(false);
    }
    if (putts === 1) {
      setSandSaves(true);
    } else {
      setSandSaves(false);
    }
  };
  const sandShotOnPlus = () => {
    setSandShots(sandShots + 1);
    if (putts === 1) {
      setSandSaves(true);
    } else {
      setSandSaves(false);
    }
  };
  const changePenaltyButton = () => {
    setShowPenalty(true);
    setPenalties(1);
  };
  const penaltyOnMinus = () => {
    setPenalties(penalties - 1);
    if (penalties - 1 < 1) {
      setShowPenalty(false);
    }
  };
  const penaltyOnPlus = () => {
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
          <Text> Par {par} </Text>
          <Text> S.I 9</Text>
        </View>
        <Card style={styles.appbar_card}>
          <Card.Content>
            <Title style={styles.appbar_card_text}> Chakeera </Title>
            {score === 0 ? (
              <Paragraph style={styles.appbar_card_subtext}>To Par E</Paragraph>
            ) : !showStroke ? (
              <Paragraph style={styles.appbar_card_subtext}>To Par E</Paragraph>
            ) : (
              <Paragraph style={styles.appbar_card_subtext}>
                {' '}
                To Par {score}{' '}
              </Paragraph>
            )}
          </Card.Content>
        </Card>
      </Appbar.Header>
      <Divider style={styles.divider} />
      <View style={styles.container}>
        <View style={styles.rightcontainer}>
          <Text style={styles.leftheadertext}>Total Stroke</Text>
          {showStroke ? (
            <View style={{ padding: 20, flexDirection: 'row' }}>
              <TouchableOpacity style={styles.nBtn} onPress={strokeOnMinus}>
                <Text style={styles.nBtnText}> - </Text>
              </TouchableOpacity>
              <Card
                style={
                  isPar
                    ? styles.cardPar
                    : isBogey
                    ? styles.cardBogey
                    : isBogeyUp
                    ? styles.cardBogeyUp
                    : isBirdie
                    ? styles.cardBirdie
                    : isEagle
                    ? styles.cardEagle
                    : isAlbatross
                    ? styles.cardEagle
                    : isHoleInOne
                    ? styles.cardEagle
                    : styles.card
                }
              >
                <Button onPress={strokeOnPlus}>
                  <Text> {stroke} | + </Text>
                </Button>
                <Divider
                  style={
                    isPar
                      ? styles.carddividerPar
                      : isBogey
                      ? styles.carddividerBogey
                      : isBogeyUp
                      ? styles.carddividerBogeyUp
                      : isBirdie
                      ? styles.carddividerBirdie
                      : isEagle
                      ? styles.carddividerEagle
                      : isAlbatross
                      ? styles.carddividerEagle
                      : isHoleInOne
                      ? styles.carddividerEagle
                      : styles.carddivider
                  }
                />
                {isPar ? (
                  <Paragraph style={{ alignSelf: 'center', color: '#5B5F59' }}>
                    Par
                  </Paragraph>
                ) : isBogey ? (
                  <Paragraph style={{ alignSelf: 'center', color: '#0F28D3' }}>
                    Bogey
                  </Paragraph>
                ) : isBogeyUp ? (
                  <Paragraph style={{ alignSelf: 'center', color: '#5B5F59' }}>
                    {score} Bogey
                  </Paragraph>
                ) : isBirdie ? (
                  <Paragraph style={{ alignSelf: 'center', color: '#FF0000' }}>
                    Birdie
                  </Paragraph>
                ) : isEagle ? (
                  <Paragraph style={{ alignSelf: 'center', color: '#49E81A' }}>
                    Eagle
                  </Paragraph>
                ) : isAlbatross ? (
                  <Paragraph style={{ alignSelf: 'center', color: '#49E81A' }}>
                    Albatross
                  </Paragraph>
                ) : isHoleInOne ? (
                  <Paragraph style={{ alignSelf: 'center', color: '#49E81A' }}>
                    Hole in One
                  </Paragraph>
                ) : (
                  <Paragraph style={{ alignSelf: 'center' }}>Par</Paragraph>
                )}
              </Card>
            </View>
          ) : (
            <View style={styles.moveright}>
              <TouchableOpacity style={styles.nBtn} onPress={changeStroke}>
                <Text style={styles.nBtnText}> + </Text>
              </TouchableOpacity>
            </View>
          )}
          <Text style={styles.leftheadertext}>Putts</Text>
          {showPutt ? (
            <View style={{ padding: 20, flexDirection: 'row' }}>
              <TouchableOpacity style={styles.nBtn} onPress={checkPuttonMinus}>
                <Text style={styles.nBtnText}> - </Text>
              </TouchableOpacity>
              <View style={{ marginLeft: 20 }}>
                <TouchableOpacity
                  style={styles.nBtn2}
                  onPress={checkPuttonPlus}
                >
                  <Text style={styles.nBtnText2}> {putts} | + </Text>
                </TouchableOpacity>
              </View>
            </View>
          ) : (
            <View style={styles.moveright}>
              <TouchableOpacity style={styles.nBtn} onPress={changePuttButton}>
                <Text style={styles.nBtnText}> + </Text>
              </TouchableOpacity>
            </View>
          )}
          <Text style={styles.leftheadertext}>Sand Shots</Text>
          {showSandShots ? (
            <View style={{ padding: 20, flexDirection: 'row' }}>
              <TouchableOpacity style={styles.nBtn} onPress={sandShotOnMinus}>
                <Text style={styles.nBtnText}> - </Text>
              </TouchableOpacity>
              <View style={{ marginLeft: 20 }}>
                <TouchableOpacity style={styles.nBtn2} onPress={sandShotOnPlus}>
                  <Text style={styles.nBtnText2}> {sandShots} | + </Text>
                </TouchableOpacity>
              </View>
            </View>
          ) : (
            <View style={styles.moveright}>
              <TouchableOpacity
                style={styles.nBtn}
                onPress={changeSandShotButton}
              >
                <Text style={styles.nBtnText}> + </Text>
              </TouchableOpacity>
            </View>
          )}
          <Text style={styles.leftheadertext}>Penalties</Text>
          {showPenalty ? (
            <View style={{ padding: 20, flexDirection: 'row' }}>
              <TouchableOpacity style={styles.nBtn} onPress={penaltyOnMinus}>
                <Text style={styles.nBtnText}> - </Text>
              </TouchableOpacity>
              <View style={{ marginLeft: 20 }}>
                <TouchableOpacity style={styles.nBtn2} onPress={penaltyOnPlus}>
                  <Text style={styles.nBtnText2}> {penalties} | + </Text>
                </TouchableOpacity>
              </View>
            </View>
          ) : (
            <View style={styles.moveright}>
              <TouchableOpacity
                style={styles.nBtn}
                onPress={changePenaltyButton}
              >
                <Text style={styles.nBtnText}> + </Text>
              </TouchableOpacity>
            </View>
          )}
          <Text style={styles.leftheadertext}>Fairways</Text>
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
      </View>
      <View style={styles.btn_view_info}>
        {enableGIR ? (
          <Button
            mode="contained"
            onPress={changeGIR}
            style={isGIRActive ? styles.activeButton : styles.enabledButton}
            labelStyle={{ color: 'black' }}
          >
            GIR
          </Button>
        ) : (
          <Button
            mode="contained"
            onPress={changeGIR}
            style={styles.disabledButton}
          >
            GIR
          </Button>
        )}

        {enableSS ? (
          <Button
            mode="contained"
            onPress={changeSS}
            style={isSSActive ? styles.activeButton : styles.enabledButton}
            labelStyle={{ color: 'black' }}
          >
            Sand Saves
          </Button>
        ) : (
          <Button
            mode="contained"
            onPress={changeSS}
            style={styles.disabledButton}
          >
            Sand Saves
          </Button>
        )}
        {enableUD ? (
          <Button
            mode="contained"
            onPress={changeUD}
            style={isUDActive ? styles.activeButton : styles.enabledButton}
            labelStyle={{ color: 'black' }}
          >
            Up & Down
          </Button>
        ) : (
          <Button
            mode="contained"
            onPress={changeUD}
            style={styles.disabledButton}
          >
            Up & Down
          </Button>
        )}
      </View>
      <Button
        style={styles.button}
        labelStyle={styles.buttontext}
        mode="contained"
        onPress={onSubmitPressed}
      >
        Submit
      </Button>
      <Portal>
        <Dialog visible={visible} onDismiss={hideDialog}>
          <Dialog.Title>Submit Your Score</Dialog.Title>
          <Dialog.Content>
            <Paragraph>
              Your score will be used for ranking calculation. Make sure you
              have entered the right informations.
            </Paragraph>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={hideDialog}>Back</Button>
            <Button onPress={proceedDialog}>Proceed</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </View>
  );
};

export default InfoScreen;
