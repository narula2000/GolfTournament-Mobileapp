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

  const scoreNameScore = Object.freeze({
    HoleInOne: -4,
    Albatross: -3,
    Eagle: -2,
    Par: 0,
    Birdie: -1,
    Bogey: 1,
    BogeyUp: 2,
  });

  const scoreName = Object.freeze({
    HoleInOne: 'HoleInOne',
    Albatross: 'Albatross',
    Eagle: 'Eagle',
    Birdie: 'Birdie',
    Par: 'Par',
    Bogey: 'Bogey',
    BogeyUp: 'BogeyUp',
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

  const onSubmitPressed = () => {
    console.log('button pressed');
    setVisible(true);
  };

  const styleCardScoreName = () => {
    switch (scoreState) {
      case scoreName.Par:
        return styles.cardPar;
      case scoreName.BogeyUp:
        return styles.cardBogey;
      case 'BogeyUp':
        return styles.cardBogeyUp;
      case scoreName.Birdie:
        return styles.cardBirdie;
      case scoreName.Eagle:
        return styles.cardEagle;
      case scoreName.Albatross:
        return styles.cardAlbatross;
      case scoreName.HoleInOne:
        return styles.cardHoleInOne;
      default:
        return styles.card;
    }
  };

  const styleDividerScoreName = () => {
    switch (scoreState) {
      case scoreName.Par:
        return styles.carddividerPar;
      case scoreName.BogeyUp:
        return styles.carddividerBogey;
      case 'BogeyUp':
        return styles.carddividerBogeyUp;
      case scoreName.Birdie:
        return styles.carddividerBirdie;
      case scoreName.Eagle:
        return styles.carddividerEagle;
      case scoreName.Albatross:
        return styles.carddividerAlbatross;
      case scoreName.HoleInOne:
        return styles.carddividerHoleInOne;
      default:
        return styles.carddivider;
    }
  };

  const displayCardComponent = () => {
    switch (scoreState) {
      case scoreName.Par:
        return (
          <Paragraph style={{ alignSelf: 'center', color: '#5B5F59' }}>
            Par
          </Paragraph>
        );
      case scoreName.BogeyUp:
        return (
          <Paragraph style={{ alignSelf: 'center', color: '#0F28D3' }}>
            Bogey
          </Paragraph>
        );
      case 'BogeyUp':
        return (
          <Paragraph style={{ alignSelf: 'center', color: '#5B5F59' }}>
            {score} Bogey
          </Paragraph>
        );
      case scoreName.Birdie:
        return (
          <Paragraph style={{ alignSelf: 'center', color: '#FF0000' }}>
            Birdie
          </Paragraph>
        );
      case scoreName.Eagle:
        return (
          <Paragraph style={{ alignSelf: 'center', color: '#49E81A' }}>
            Eagle
          </Paragraph>
        );
      case scoreName.Albatross:
        return (
          <Paragraph style={{ alignSelf: 'center', color: '#49E81A' }}>
            Albatross
          </Paragraph>
        );
      case scoreName.HoleInOne:
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

  const editStroke = () => {
    setShowStroke(true);
    setStroke(holePar);
    setScore(0);
    setScoreState(scoreName.Par);
  };

  const increaseStroke = () => {
    const currentStroke = stroke + 1;
    const currentScore = currentStroke - holePar;
    setScore(currentScore);
    setStroke(currentStroke);

    if (currentStroke === scoreNameScore.Par) {
      setStroke(holePar);
    }

    if (currentScore >= scoreNameScore.BogeyUp) {
      setScoreState(scoreName.BogeyUp);
    } else if (currentScore === scoreNameScore.Bogey) {
      setScoreState(scoreName.BogeyUp);
    } else if (currentScore === scoreNameScore.Par) {
      setScoreState(scoreName.Par);
    } else if (currentScore === scoreNameScore.Birdie) {
      setScoreState(scoreName.Birdie);
    } else if (currentScore === scoreNameScore.Eagle) {
      setScoreState(scoreName.Eagle);
    } else if (currentScore === scoreNameScore.Albatross) {
      setScoreState(scoreName.Albatross);
    } else if (currentScore <= scoreNameScore.HoleInOne) {
      setScoreState(scoreName.HoleInOne);
    }

    if (currentStroke - putts <= GIR) {
      setGIR(true);
    } else {
      setGIR(false);
    }
    console.log('ScoreState: ', scoreState);
  };

  const decreaseStroke = () => {
    const currentStroke = stroke - 1;
    const currentScore = currentStroke - holePar;
    setScore(currentScore);
    setStroke(currentStroke);

    if (currentStroke === scoreNameScore.Par) {
      setStroke(holePar);
    }

    if (currentStroke <= 0) {
      setShowStroke(false);
    }

    if (currentScore >= scoreNameScore.BogeyUp) {
      setScoreState('BogeyUp');
    } else if (currentScore === scoreNameScore.Bogey) {
      setScoreState(scoreName.BogeyUp);
    } else if (currentScore === scoreNameScore.Par) {
      setScoreState(scoreName.Par);
    } else if (currentScore === scoreNameScore.Birdie) {
      setScoreState(scoreName.Birdie);
    } else if (currentScore === scoreNameScore.Eagle) {
      if (currentStroke === 1) setScoreState(scoreName.HoleInOne);
      else setScoreState(scoreName.Eagle);
    } else if (currentScore === scoreNameScore.Albatross) {
      if (currentStroke === 1) setScoreState(scoreName.HoleInOne);
      else setScoreState(scoreName.Albatross);
    } else if (currentScore <= scoreNameScore.HoleInOne) {
      setScoreState(scoreName.HoleInOne);
    }

    if (currentStroke - putts <= GIR) {
      setGIR(true);
    } else {
      setGIR(false);
    }

    console.log('ScoreState: ', scoreState);
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

    if (currentPutts === 1) {
      setUpDown(true);
    } else {
      setUpDown(false);
    }

    if (sandShots > 0 && currentPutts === 1) {
      setSandSaves(true);
    } else {
      setSandSaves(false);
    }

    if (stroke - currentPutts <= GIR) {
      setGIR(true);
    } else {
      setGIR(false);
    }

    console.log('Stroke: ', stroke);
    console.log('Score: ', score);
    console.log('ToG: ', stroke - currentPutts);
  };

  const decreasePutt = () => {
    const currentPutts = putts - 1;
    setPutts(currentPutts);

    if (currentPutts === 1) {
      setUpDown(true);
    } else {
      setUpDown(false);
    }
    if (currentPutts <= 0) {
      setShowPutt(false);
      setEnabledUD(false);
      setEnabledGIR(false);
    }
    if (sandShots > 0 && currentPutts === 1) {
      setSandSaves(true);
    } else {
      setSandSaves(false);
    }

    if (stroke - currentPutts <= GIR) {
      setGIR(true);
    } else {
      setGIR(false);
    }
    console.log('Stroke: ', stroke);
    console.log('Score: ', score);
    console.log('ToG: ', stroke - currentPutts);
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
