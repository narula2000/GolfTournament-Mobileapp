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

  const onSubmitPressed = () => {
    console.log('button pressed');
    setVisible(true);
  };

  const scoreName = Object.freeze({
    HoleInOne: -4,
    Albatross: -3,
    Eagle: -2,
    Birdie: -1,
    Bogey: 1,
    BogeyUp: 2,
  });

  const holePar = 3;

  const GIR = holePar - 2;

  const [stroke, setStroke] = React.useState(holePar);
  const [score, setScore] = React.useState(stroke - holePar);

  const [putts, setPutts] = React.useState(0);
  const [sandShots, setSandShots] = React.useState(0);
  const [penalties, setPenalties] = React.useState(0);

  const [fairway, setFairway] = React.useState('');
  const [scoreState, setScoreState] = React.useState('');

  const [showStroke, setShowStroke] = React.useState(false);
  const [showPutt, setShowPutt] = React.useState(false);
  const [showSandShots, setShowSandShots] = React.useState(false);
  const [showPenalty, setShowPenalty] = React.useState(false);

  const [enableGIR, setEnabledGIR] = React.useState(false);
  const [enableSandSave, setEnabledSS] = React.useState(false);
  const [enableUD, setEnabledUD] = React.useState(false);

  const [isGIRActive, setGIR] = React.useState(false);
  const [isSandSaveActive, setSandSaves] = React.useState(false);
  const [isUDActive, setUpDown] = React.useState(false);

  const checkSetGIR = () => {
    if (stroke - 1 - putts <= GIR) {
      setGIR(true);
    } else {
      setGIR(false);
    }
  };

  const checkSetSandSave = () => {
    if (putts === 1) {
      setSandSaves(true);
    } else {
      setSandSaves(false);
    }
  };

  const editStroke = () => {
    setShowStroke(true);
    setStroke(holePar);
    setScore(0);
    setScoreState('Par');
  };

  const increaseStroke = () => {
    setStroke(stroke + 1);

    if (stroke + 1 === scoreName.Par) {
      setStroke(holePar);
    }

    setScore(stroke + 1 - holePar);

    if (score + 1 >= scoreName.BogeyUp) {
      setScoreState('BogeyUp');
    } else if (score + 1 === scoreName.Bogey) {
      setScoreState('Bogey');
    } else if (score + 1 === scoreName.Par) {
      setScoreState('Par');
    } else if (score + 1 === scoreName.Birdie) {
      setScoreState('Birdie');
    } else if (score + 1 === scoreName.Eagle) {
      setScoreState('Eagle');
    } else if (score + 1 === scoreName.Albatross) {
      setScoreState('Albatross');
    } else if (score + 1 <= scoreName.HoleInOne) {
      setScoreState('HoleInOne');
    }

    checkSetGIR();
    console.log(stroke + 1);
    console.log(score + 1);
  };

  const decreaseStroke = () => {
    setStroke(stroke - 1);

    if (stroke - 1 === scoreName.Par) {
      setStroke(holePar);
    }

    if (stroke - 1 <= 0) {
      setShowStroke(false);
    }

    setScore(stroke - 1 - holePar);

    if (score - 1 >= scoreName.BogeyUp) {
      setScoreState('BogeyUp');
    } else if (score - 1 === scoreName.Bogey) {
      setScoreState('Bogey');
    } else if (score - 1 === scoreName.Par) {
      setScoreState('Par');
    } else if (score - 1 === scoreName.Birdie) {
      setScoreState('Birdie');
    } else if (score - 1 === scoreName.Eagle) {
      if (stroke - 1 === 1) setScoreState('HoleInOne');
      else setScoreState('Eagle');
    } else if (score - 1 === scoreName.Albatross) {
      if (stroke - 1 === 1) setScoreState('HoleInOne');
      else setScoreState('Albatross');
    } else if (score - 1 <= scoreName.HoleInOne) {
      setScoreState('HoleInOne');
    }

    checkSetGIR();
    console.log(stroke - 1);
    console.log(score - 1);
  };

  const editPutt = () => {
    setShowPutt(true);
    setEnabledUD(true);
    setEnabledGIR(true);
    setPutts(1);
    setUpDown(true);
    if (sandShots > 0) {
      setSandSaves(true);
    }
  };

  const increasePutt = () => {
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

    checkSetGIR();
  };

  const decreasePutt = () => {
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

    checkSetGIR();
  };

  const editSandShot = () => {
    setShowSandShots(true);
    setEnabledSS(true);
    setSandShots(1);
    checkSetSandSave();
  };

  const increaseSandShot = () => {
    setSandShots(sandShots + 1);
    checkSetSandSave();
  };

  const decreaseSandShot = () => {
    setSandShots(sandShots - 1);
    if (sandShots - 1 < 1) {
      setSandSaves(false);
      setShowSandShots(false);
      setEnabledSS(false);
    }
    checkSetSandSave();
  };

  const editPenalty = () => {
    setShowPenalty(true);
    setPenalties(1);
  };

  const increasePenalty = () => {
    setPenalties(penalties - 1);
    if (penalties - 1 < 1) {
      setShowPenalty(false);
    }
  };

  const decreasePenalty = () => {
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
          <Text> Par {holePar} </Text>
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
              <TouchableOpacity style={styles.nBtn} onPress={decreaseStroke}>
                <Text style={styles.nBtnText}> - </Text>
              </TouchableOpacity>
              <Card
                style={
                  scoreState === 'Par'
                    ? styles.cardPar
                    : scoreState === 'Bogey'
                    ? styles.cardBogey
                    : scoreState === 'BogeyUp'
                    ? styles.cardBogeyUp
                    : scoreState === 'Birdie'
                    ? styles.cardBirdie
                    : scoreState === 'Eagle'
                    ? styles.cardEagle
                    : scoreState === 'Albatross'
                    ? styles.cardEagle
                    : scoreState === 'HoleInOne'
                    ? styles.cardEagle
                    : styles.card
                }
              >
                <Button onPress={increaseStroke}>
                  <Text> {stroke} | + </Text>
                </Button>
                <Divider
                  style={
                    scoreState === 'Par'
                      ? styles.carddividerPar
                      : scoreState === 'Bogey'
                      ? styles.carddividerBogey
                      : scoreState === 'BogeyUp'
                      ? styles.carddividerBogeyUp
                      : scoreState === 'Birdie'
                      ? styles.carddividerBirdie
                      : scoreState === 'Eagle'
                      ? styles.carddividerEagle
                      : scoreState === 'Albatross'
                      ? styles.carddividerEagle
                      : scoreState === 'HoleInOne'
                      ? styles.carddividerEagle
                      : styles.carddivider
                  }
                />
                {scoreState === 'Par' ? (
                  <Paragraph style={{ alignSelf: 'center', color: '#5B5F59' }}>
                    Par
                  </Paragraph>
                ) : scoreState === 'Bogey' ? (
                  <Paragraph style={{ alignSelf: 'center', color: '#0F28D3' }}>
                    Bogey
                  </Paragraph>
                ) : scoreState === 'BogeyUp' ? (
                  <Paragraph style={{ alignSelf: 'center', color: '#5B5F59' }}>
                    {score} Bogey
                  </Paragraph>
                ) : scoreState === 'Birdie' ? (
                  <Paragraph style={{ alignSelf: 'center', color: '#FF0000' }}>
                    Birdie
                  </Paragraph>
                ) : scoreState === 'Eagle' ? (
                  <Paragraph style={{ alignSelf: 'center', color: '#49E81A' }}>
                    Eagle
                  </Paragraph>
                ) : scoreState === 'Albatross' ? (
                  <Paragraph style={{ alignSelf: 'center', color: '#49E81A' }}>
                    Albatross
                  </Paragraph>
                ) : scoreState === 'HoleInOne' ? (
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
              <TouchableOpacity style={styles.nBtn} onPress={editStroke}>
                <Text style={styles.nBtnText}> + </Text>
              </TouchableOpacity>
            </View>
          )}
          <Text style={styles.leftheadertext}>Putts</Text>
          {showPutt ? (
            <View style={{ padding: 20, flexDirection: 'row' }}>
              <TouchableOpacity style={styles.nBtn} onPress={decreasePutt}>
                <Text style={styles.nBtnText}> - </Text>
              </TouchableOpacity>
              <View style={{ marginLeft: 20 }}>
                <TouchableOpacity style={styles.nBtn2} onPress={increasePutt}>
                  <Text style={styles.nBtnText2}> {putts} | + </Text>
                </TouchableOpacity>
              </View>
            </View>
          ) : (
            <View style={styles.moveright}>
              <TouchableOpacity style={styles.nBtn} onPress={editPutt}>
                <Text style={styles.nBtnText}> + </Text>
              </TouchableOpacity>
            </View>
          )}
          <Text style={styles.leftheadertext}>Sand Shots</Text>
          {showSandShots ? (
            <View style={{ padding: 20, flexDirection: 'row' }}>
              <TouchableOpacity style={styles.nBtn} onPress={decreaseSandShot}>
                <Text style={styles.nBtnText}> - </Text>
              </TouchableOpacity>
              <View style={{ marginLeft: 20 }}>
                <TouchableOpacity
                  style={styles.nBtn2}
                  onPress={increaseSandShot}
                >
                  <Text style={styles.nBtnText2}> {sandShots} | + </Text>
                </TouchableOpacity>
              </View>
            </View>
          ) : (
            <View style={styles.moveright}>
              <TouchableOpacity style={styles.nBtn} onPress={editSandShot}>
                <Text style={styles.nBtnText}> + </Text>
              </TouchableOpacity>
            </View>
          )}
          <Text style={styles.leftheadertext}>Penalties</Text>
          {showPenalty ? (
            <View style={{ padding: 20, flexDirection: 'row' }}>
              <TouchableOpacity style={styles.nBtn} onPress={increasePenalty}>
                <Text style={styles.nBtnText}> - </Text>
              </TouchableOpacity>
              <View style={{ marginLeft: 20 }}>
                <TouchableOpacity
                  style={styles.nBtn2}
                  onPress={decreasePenalty}
                >
                  <Text style={styles.nBtnText2}> {penalties} | + </Text>
                </TouchableOpacity>
              </View>
            </View>
          ) : (
            <View style={styles.moveright}>
              <TouchableOpacity style={styles.nBtn} onPress={editPenalty}>
                <Text style={styles.nBtnText}> + </Text>
              </TouchableOpacity>
            </View>
          )}
          <Text style={styles.leftheadertext}>Fairways</Text>
          <TouchableOpacity
            style={
              fairway === 'Left'
                ? styles.roundButtonPressed
                : styles.roundButton
            }
            onPress={() => {
              setFairway('Left');
            }}
          >
            <Icon
              name="arrow-top-left"
              size={15}
              color={fairway === 'Left' ? 'white' : 'black'}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={
              fairway === 'On' ? styles.roundButtonPressed : styles.roundButton
            }
            onPress={() => {
              setFairway('On');
            }}
          >
            <Icon
              name="circle-outline"
              size={15}
              color={fairway === 'On' ? 'white' : 'black'}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={
              fairway === 'Right'
                ? styles.roundButtonPressed
                : styles.roundButton
            }
            onPress={() => {
              setFairway('Right');
            }}
          >
            <Icon
              name="arrow-top-right"
              size={15}
              color={fairway === 'Right' ? 'white' : 'black'}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={
              fairway === 'Hazard'
                ? styles.roundButtonPressed
                : styles.roundButton
            }
            onPress={() => {
              setFairway('Hazard');
            }}
          >
            <Icon
              name="arrow-down"
              size={15}
              color={fairway === 'Hazard' ? 'white' : 'black'}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.btn_view_info}>
        {enableGIR ? (
          <Button
            mode="contained"
            onPress={() => {
              setGIR(!isGIRActive);
            }}
            style={isGIRActive ? styles.activeButton : styles.enabledButton}
            labelStyle={{ color: 'black' }}
          >
            GIR
          </Button>
        ) : (
          <Button
            mode="contained"
            onPress={() => {
              setGIR(!isGIRActive);
            }}
            style={styles.disabledButton}
          >
            GIR
          </Button>
        )}

        {enableSandSave ? (
          <Button
            mode="contained"
            onPress={() => {
              setSandSaves(!isSandSaveActive);
            }}
            style={
              isSandSaveActive ? styles.activeButton : styles.enabledButton
            }
            labelStyle={{ color: 'black' }}
          >
            Sand Saves
          </Button>
        ) : (
          <Button mode="contained" style={styles.disabledButton}>
            Sand Saves
          </Button>
        )}
        {enableUD ? (
          <Button
            mode="contained"
            onPress={() => {
              setUpDown(!isUDActive);
            }}
            style={isUDActive ? styles.activeButton : styles.enabledButton}
            labelStyle={{ color: 'black' }}
          >
            Up & Down
          </Button>
        ) : (
          <Button mode="contained" style={styles.disabledButton}>
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
        <Dialog visible={visible} onDismiss={() => setVisible(false)}>
          <Dialog.Title>Submit Your Score</Dialog.Title>
          <Dialog.Content>
            <Paragraph>
              Your score will be used for ranking calculation. Make sure you
              have entered the right informations.
            </Paragraph>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={() => setVisible(false)}>Back</Button>
            <Button onPress={() => navigation.navigate('HomeScreen')}>
              Proceed
            </Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </View>
  );
};

export default InfoScreen;
