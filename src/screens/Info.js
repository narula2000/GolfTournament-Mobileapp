/* eslint-disable no-nested-ternary */
import React, { useEffect } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
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
import firebase from 'firebase/app';
import 'firebase/auth';
import styles from '../styles/InfoScreenStyle';
import firebaseFunctions from '../firebase/functions';

const InfoScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();

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

  const auth = firebase.auth();
  const userID = String(auth.currentUser.uid);

  const { adminId, tournamentId, hole, holeData } = route.params;
  const holePar = holeData.par;

  const GIR = holePar - 2;
  const SI = holeData.strokeIndex;

  const [visible, setVisible] = React.useState(false);

  const [stroke, setStroke] = React.useState(holeData.stroke);
  const [score, setScore] = React.useState(holeData.score);

  const [putts, setPutts] = React.useState(holeData.putt);
  const [sandShots, setSandShots] = React.useState(holeData.sandShot);
  const [penalties, setPenalties] = React.useState(holeData.penalty);

  const [fairway, setFairway] = React.useState('');
  const [scoreState, setScoreState] = React.useState('');

  const [showStroke, setShowStroke] = React.useState(!holeData.stroke <= 0);
  const [showPutt, setShowPutt] = React.useState(!holeData.putt <= 0);
  const [showSandShots, setShowSandShots] = React.useState(
    !holeData.sandShot <= 0
  );
  const [showPenalty, setShowPenalty] = React.useState(!holeData.penalty <= 0);

  const [enableGIR, setEnabledGIR] = React.useState(putts > 0);
  const [enableSandSave, setEnabledSS] = React.useState(sandShots >= 1);
  const [enableUD, setEnabledUD] = React.useState(putts >= 1);
  const [isGIRActive, setGIR] = React.useState(holeData.gir);
  const [isSandSaveActive, setSandSaves] = React.useState(holeData.sandSave);
  const [isUDActive, setUpDown] = React.useState(holeData.upDown);

  const updateScoreState = (input) => {
    if (input >= scoreOfNames.BogeyUp) {
      setScoreState(scoreNames.BogeyUp);
    } else if (input === scoreOfNames.Bogey) {
      setScoreState(scoreNames.Bogey);
    } else if (input === scoreOfNames.Par) {
      setScoreState(scoreNames.Par);
    } else if (input === scoreOfNames.Birdie) {
      setScoreState(scoreNames.Birdie);
    } else if (input === scoreOfNames.Eagle) {
      if (input === 1) setScoreState(scoreNames.HoleInOne);
      else setScoreState(scoreNames.Eagle);
    } else if (input === scoreOfNames.Albatross) {
      if (input === 1) setScoreState(scoreNames.HoleInOne);
      else setScoreState(scoreNames.Albatross);
    } else if (input <= scoreOfNames.HoleInOne) {
      setScoreState(scoreNames.HoleInOne);
    }
  };

  useEffect(() => {
    updateScoreState(score);
    if (holeData.fairway !== undefined) {
      setFairway(holeData.fairway);
    }
  }, [score, holeData.fairway]);

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

  const scoreEvaluator = () => {
    if (score === 0) {
      return <Paragraph style={styles.appbar_card_subtext}>To Par E</Paragraph>;
    }
    if (!showStroke) {
      return <Paragraph style={styles.appbar_card_subtext}>To Par E</Paragraph>;
    }
    return (
      <Paragraph style={styles.appbar_card_subtext}> To Par {score} </Paragraph>
    );
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
    setGIR(currentStroke - putts <= GIR);
  };

  const decreaseStroke = () => {
    const currentStroke = stroke - 1;
    const currentScore = currentStroke - holePar;
    setScore(currentScore);
    setStroke(currentStroke);

    if (currentStroke === scoreOfNames.Par) {
      setStroke(holePar);
    }

    if (currentStroke < 1) {
      setPutts(0);
      setSandShots(0);
      setPenalties(0);
      setFairway('');
      setGIR(false);
      setSandSaves(false);
      setUpDown(false);
      setShowPutt(false);
      setShowSandShots(false);
      setShowPenalty(false);
      setEnabledGIR(false);
      setEnabledSS(false);
      setEnabledUD(false);
    }

    setShowStroke(!currentStroke <= 0);

    if (currentStroke <= 0) {
      setFairway('');
    }

    updateScoreState(currentScore);
    setGIR(currentStroke - putts <= GIR);
  };

  const editPutt = () => {
    if (showStroke) {
      setShowPutt(true);
      setEnabledUD(true);
      setEnabledGIR(true);
      setPutts(1);
      setUpDown(true);
      setGIR(stroke - 1 <= GIR);
      setSandSaves(sandShots > 0);
    }
  };

  const increasePutt = () => {
    const currentPutts = putts + 1;
    setPutts(currentPutts);
    setUpDown(currentPutts === 1);
    setSandSaves(sandShots > 0 && currentPutts === 1);
    setGIR(stroke - currentPutts <= GIR);
  };

  const decreasePutt = () => {
    const currentPutts = putts - 1;
    setPutts(currentPutts);
    setUpDown(currentPutts === 1);
    if (currentPutts <= 0) {
      setShowPutt(false);
      setEnabledUD(false);
      setEnabledGIR(false);
    }
    setSandSaves(sandShots > 0 && currentPutts === 1);
    setGIR(stroke - currentPutts <= GIR);
  };

  const editSandShot = () => {
    if (showStroke) {
      setShowSandShots(true);
      setEnabledSS(true);
      setSandShots(1);
      setSandSaves(putts === 1);
    }
  };

  const increaseSandShot = () => {
    const currentSandShots = sandShots + 1;
    setSandShots(currentSandShots);
    setSandSaves(putts === 1);
  };

  const decreaseSandShot = () => {
    const currentSandShots = sandShots - 1;
    setSandShots(currentSandShots);
    if (currentSandShots < 1) {
      setSandSaves(false);
      setShowSandShots(false);
      setEnabledSS(false);
    }
    setSandSaves(putts === 1);
  };

  const editPenalty = () => {
    if (showStroke) {
      setShowPenalty(true);
      setPenalties(1);
    }
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

  const pushHoleInfo = async () => {
    const holeInfo = {
      createDate: holeData.createDate,
      gir: isGIRActive,
      fairway: fairway,
      par: holePar,
      penalty: penalties,
      putt: putts,
      sandSave: isSandSaveActive,
      sandShot: sandShots,
      score: score,
      stroke: stroke,
      strokeIndex: holeData.strokeIndex,
      upDown: isUDActive,
      updateDate: new Date().toISOString(),
    };
    await firebaseFunctions.updateHoleInfo(
      userID,
      adminId,
      tournamentId,
      hole,
      holeInfo
    );
    navigation.navigate('Home', { updatedCurrentScore: score });
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
          <Text> Hole {hole} </Text>
          <Text> Par {holePar} </Text>
          <Text> S.I {SI} </Text>
        </View>
        <Card style={styles.appbar_card}>
          <Card.Content>
            <Title style={styles.appbar_card_text}> Chakeera </Title>
            {scoreEvaluator()}
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
                : !showStroke
                ? styles.roundButtonDisabled
                : styles.roundButtonActive
            }
            onPress={() => {
              if (showStroke) {
                setFairway(fairways.Left);
              }
            }}
          >
            <Icon
              name="arrow-top-left"
              size={15}
              color={
                showStroke && fairway !== fairways.Left ? 'black' : 'white'
              }
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={
              fairway === fairways.On
                ? styles.roundButtonPressed
                : !showStroke
                ? styles.roundButtonDisabled
                : styles.roundButtonActive
            }
            onPress={() => {
              if (showStroke) {
                setFairway(fairways.On);
              }
            }}
          >
            <Icon
              name="circle-outline"
              size={15}
              color={showStroke && fairway !== fairways.On ? 'black' : 'white'}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={
              fairway === fairways.Right
                ? styles.roundButtonPressed
                : !showStroke
                ? styles.roundButtonDisabled
                : styles.roundButtonActive
            }
            onPress={() => {
              if (showStroke) {
                setFairway(fairways.Right);
              }
            }}
          >
            <Icon
              name="arrow-top-right"
              size={15}
              color={
                showStroke && fairway !== fairways.Right ? 'black' : 'white'
              }
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={
              fairway === fairways.Hazard
                ? styles.roundButtonPressed
                : !showStroke
                ? styles.roundButtonDisabled
                : styles.roundButtonActive
            }
            onPress={() => {
              if (showStroke) {
                setFairway(fairways.Hazard);
              }
            }}
          >
            <Icon
              name="arrow-down"
              size={15}
              color={
                showStroke && fairway !== fairways.Hazard ? 'black' : 'white'
              }
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
          <Button mode="contained" style={styles.disabledButton}>
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
        onPress={() => {
          setVisible(true);
        }}
      >
        Submit
      </Button>
      {showStroke ? (
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
              <Button onPress={pushHoleInfo}>Proceed</Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
      ) : (
        <Portal>
          <Dialog visible={visible} onDismiss={() => setVisible(false)}>
            <Dialog.Content>
              <Paragraph>There is no input for stroke</Paragraph>
            </Dialog.Content>
            <Dialog.Actions>
              <Button onPress={() => setVisible(false)}>Back</Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
      )}
    </View>
  );
};

export default InfoScreen;
