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

  const scoreOfNames = Object.freeze({
    HoleInOne: -4,
    Albatross: -3,
    Eagle: -2,
    Par: 0,
    Birdie: -1,
    Bogey: 1,
    BogeyUp: 2,
  });

  const scoreNames = Object.freeze({
    HoleInOne: 'HoleInOne',
    Albatross: 'Albatross',
    Eagle: 'Eagle',
    Birdie: 'Birdie',
    Par: 'Par',
    Bogey: 'Bogey',
    BogeyUp: 'BogeyUp',
  });

  const fairways = Object.freeze({
    Left: 'Left',
    On: 'On',
    Right: 'Right',
    Hazard: 'Hazard',
  });

  const holePar = 3;

  const GIR = holePar - 2;

  const [visible, setVisible] = React.useState(false);

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

  const onSubmitPressed = () => {
    console.log('button pressed');
    setVisible(true);
  };

  const styleCardScoreName = () => {
    switch (scoreState) {
      case scoreNames.Par:
        return styles.cardPar;
      case scoreNames.Bogey:
        return styles.cardBogey;
      case scoreNames.BogeyUp:
        return styles.cardBogeyUp;
      case scoreNames.Birdie:
        return styles.cardBirdie;
      case scoreNames.Eagle:
        return styles.cardEagle;
      case scoreNames.Albatross:
        return styles.cardEagle;
      case scoreNames.HoleInOne:
        return styles.cardEagle;
      default:
        return styles.card;
    }
  };

  const styleDividerScoreName = () => {
    switch (scoreState) {
      case scoreNames.Par:
        return styles.carddividerPar;
      case scoreNames.Bogey:
        return styles.carddividerBogey;
      case scoreNames.BogeyUp:
        return styles.carddividerBogeyUp;
      case scoreNames.Birdie:
        return styles.carddividerBirdie;
      case scoreNames.Eagle:
        return styles.carddividerEagle;
      case scoreNames.Albatross:
        return styles.carddividerEagle;
      case scoreNames.HoleInOne:
        return styles.carddividerEagle;
      default:
        return styles.carddivider;
    }
  };

  const displayCardComponent = () => {
    switch (scoreState) {
      case scoreNames.Par:
        return (
          <Paragraph style={{ alignSelf: 'center', color: '#5B5F59' }}>
            Par
          </Paragraph>
        );
      case scoreNames.Bogey:
        return (
          <Paragraph style={{ alignSelf: 'center', color: '#0F28D3' }}>
            Bogey
          </Paragraph>
        );
      case scoreNames.BogeyUp:
        return (
          <Paragraph style={{ alignSelf: 'center', color: '#5B5F59' }}>
            {score} Bogey
          </Paragraph>
        );
      case scoreNames.Birdie:
        return (
          <Paragraph style={{ alignSelf: 'center', color: '#FF0000' }}>
            Birdie
          </Paragraph>
        );
      case scoreNames.Eagle:
        return (
          <Paragraph style={{ alignSelf: 'center', color: '#49E81A' }}>
            Eagle
          </Paragraph>
        );
      case scoreNames.Albatross:
        return (
          <Paragraph style={{ alignSelf: 'center', color: '#49E81A' }}>
            Albatross
          </Paragraph>
        );
      case scoreNames.HoleInOne:
        return (
          <Paragraph style={{ alignSelf: 'center', color: '#49E81A' }}>
            Hole in One
          </Paragraph>
        );
      default:
        return <Paragraph style={{ alignSelf: 'center' }}>Par</Paragraph>;
    }
  };

  const checkSetSandSave = () => {
    if (putts === 1) {
      setSandSaves(true);
    } else {
      setSandSaves(false);
    }
  };

  const checkSetSandSaveForPutt = (currentPutts) => {
    if (sandShots > 0 && currentPutts === 1) {
      setSandSaves(true);
    } else {
      setSandSaves(false);
    }
  };

  const checkSetGIR = (toHole) => {
    if (toHole <= GIR) {
      setGIR(true);
    } else {
      setGIR(false);
    }
  };

  const checkSetUD = (currentPutts) => {
    if (currentPutts === 1) {
      setUpDown(true);
    } else {
      setUpDown(false);
    }
  };

  const editStroke = () => {
    setShowStroke(true);
    setStroke(holePar);
    setScore(0);
    setScoreState(scoreNames.Par);
  };

  const increaseStroke = () => {
    const currentStroke = stroke + 1;
    const currentScore = currentStroke - holePar;
    setScore(currentScore);
    setStroke(currentStroke);

    if (currentStroke === scoreOfNames.Par) {
      setStroke(holePar);
    }

    if (currentScore >= scoreOfNames.BogeyUp) {
      setScoreState(scoreNames.BogeyUp);
    } else if (currentScore === scoreOfNames.Bogey) {
      setScoreState(scoreNames.Bogey);
    } else if (currentScore === scoreOfNames.Par) {
      setScoreState(scoreNames.Par);
    } else if (currentScore === scoreOfNames.Birdie) {
      setScoreState(scoreNames.Birdie);
    } else if (currentScore === scoreOfNames.Eagle) {
      setScoreState(scoreNames.Eagle);
    } else if (currentScore === scoreOfNames.Albatross) {
      setScoreState(scoreNames.Albatross);
    } else if (currentScore <= scoreOfNames.HoleInOne) {
      setScoreState(scoreNames.HoleInOne);
    }
    checkSetGIR(currentStroke - putts);
  };

  const decreaseStroke = () => {
    const currentStroke = stroke - 1;
    const currentScore = currentStroke - holePar;
    setScore(currentScore);
    setStroke(currentStroke);

    if (currentStroke === scoreOfNames.Par) {
      setStroke(holePar);
    }

    if (currentStroke <= 0) {
      setShowStroke(false);
    }

    if (currentScore >= scoreOfNames.BogeyUp) {
      setScoreState(scoreNames.BogeyUp);
    } else if (currentScore === scoreOfNames.Bogey) {
      setScoreState(scoreNames.Bogey);
    } else if (currentScore === scoreOfNames.Par) {
      setScoreState(scoreNames.Par);
    } else if (currentScore === scoreOfNames.Birdie) {
      setScoreState(scoreNames.Birdie);
    } else if (currentScore === scoreOfNames.Eagle) {
      if (currentStroke === 1) setScoreState(scoreNames.HoleInOne);
      else setScoreState(scoreNames.Eagle);
    } else if (currentScore === scoreOfNames.Albatross) {
      if (currentStroke === 1) setScoreState(scoreNames.HoleInOne);
      else setScoreState(scoreNames.Albatross);
    } else if (currentScore <= scoreOfNames.HoleInOne) {
      setScoreState(scoreNames.HoleInOne);
    }

    checkSetGIR(currentStroke - putts);
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
    const currentPutts = putts + 1;
    setPutts(currentPutts);
    checkSetUD(currentPutts);
    checkSetSandSaveForPutt(currentPutts);
    checkSetGIR(stroke - currentPutts);
  };

  const decreasePutt = () => {
    const currentPutts = putts - 1;
    setPutts(currentPutts);
    checkSetUD(currentPutts);
    if (currentPutts <= 0) {
      setShowPutt(false);
      setEnabledUD(false);
      setEnabledGIR(false);
    }
    checkSetSandSaveForPutt(currentPutts);
    checkSetGIR(stroke - currentPutts);
  };

  const editSandShot = () => {
    setShowSandShots(true);
    setEnabledSS(true);
    setSandShots(1);
    checkSetSandSave();
  };

  const increaseSandShot = () => {
    const currentSandShots = sandShots + 1;
    setSandShots(currentSandShots);
    checkSetSandSave();
  };

  const decreaseSandShot = () => {
    const currentSandShots = sandShots - 1;
    setSandShots(currentSandShots);
    if (currentSandShots < 1) {
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
    const currentPenalties = penalties + 1;
    setPenalties(currentPenalties);
  };

  const decreasePenalty = () => {
    const currentPenalties = penalties - 1;
    setPenalties(currentPenalties);
    if (currentPenalties < 1) {
      setShowPenalty(false);
    }
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
              <Card style={styleCardScoreName()}>
                <Button onPress={increaseStroke}>
                  <Text> {stroke} | + </Text>
                </Button>
                <Divider style={styleDividerScoreName()} />
                {displayCardComponent()}
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
              <TouchableOpacity style={styles.nBtn} onPress={decreasePenalty}>
                <Text style={styles.nBtnText}> - </Text>
              </TouchableOpacity>
              <View style={{ marginLeft: 20 }}>
                <TouchableOpacity
                  style={styles.nBtn2}
                  onPress={increasePenalty}
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
              fairway === fairways.Left
                ? styles.roundButtonPressed
                : styles.roundButton
            }
            onPress={() => {
              setFairway(fairways.Left);
            }}
          >
            <Icon
              name="arrow-top-left"
              size={15}
              color={fairway === fairways.Left ? 'white' : 'black'}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={
              fairway === fairways.On
                ? styles.roundButtonPressed
                : styles.roundButton
            }
            onPress={() => {
              setFairway(fairways.On);
            }}
          >
            <Icon
              name="circle-outline"
              size={15}
              color={fairway === fairways.On ? 'white' : 'black'}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={
              fairway === fairways.Right
                ? styles.roundButtonPressed
                : styles.roundButton
            }
            onPress={() => {
              setFairway(fairways.Right);
            }}
          >
            <Icon
              name="arrow-top-right"
              size={15}
              color={fairway === fairways.Right ? 'white' : 'black'}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={
              fairway === fairways.Hazard
                ? styles.roundButtonPressed
                : styles.roundButton
            }
            onPress={() => {
              setFairway(fairways.Hazard);
            }}
          >
            <Icon
              name="arrow-down"
              size={15}
              color={fairway === fairways.Hazard ? 'white' : 'black'}
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
