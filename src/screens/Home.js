import React, { useEffect } from 'react';
import { View, Image, TouchableOpacity, Text } from 'react-native';
import {
  Appbar,
  Divider,
  Card,
  Title,
  Button,
  Paragraph,
  Dialog,
  Portal,
  ActivityIndicator,
} from 'react-native-paper';
import { useNavigation, useRoute } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import firebase from 'firebase/app';
import 'firebase/auth';
import styles from '../styles/HomeScreenStyle';
import firebaseFunctions from '../firebase/functions';
import theme from '../core/theme';

const Home = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { tournamentId, adminId, username, currentScore } = route.params;
  const [updateScore, setUpdatedScore] = React.useState(0);
  const auth = firebase.auth();
  const userID = String(auth.currentUser.uid);
  const [visible, setVisible] = React.useState(false);

  const getScore = () => {
    firebaseFunctions
      .fetchValidUserScore(userID, adminId, tournamentId)
      .then((result) => {
        setUpdatedScore(result);
      });
    return <Text style={styles.text}>Score: {updateScore}</Text>;
  };

  useEffect = () => {
    getScore();
  };

  const holePressed = async (num) => {
    const holenum = String(num).padStart(2, '0');
    const holeinfo = await firebaseFunctions.fetchSpecificHole(
      userID,
      adminId,
      tournamentId,
      `${holenum}`
    );
    setTimeout(() => {
      navigation.navigate('Info', {
        adminId: adminId,
        tournamentId: tournamentId,
        hole: holenum,
        holeData: holeinfo,
      });
    }, 0);
  };

  const onButtonPressed = async () => {
    setVisible(true);
    const users = await firebaseFunctions.fetchValidUserInfo(
      adminId,
      tournamentId
    );
    const updatedScore = await firebaseFunctions.fetchValidUserScore(
      userID,
      adminId,
      tournamentId
    );
    const currentStroke = await firebaseFunctions.fetchValidUserStroke(
      userID,
      adminId,
      tournamentId
    );
    const currentUserData = {
      name: username,
      score: updatedScore,
      stroke: currentStroke,
      id: 0,
    };
    const allUsers = async () => {
      const table = [];
      const compare = (a, b) => {
        if (a.score < b.score) {
          return -1;
        }
        if (a.score > b.score) {
          return 1;
        }
        return 0;
      };
      await Promise.all(
        Object.keys(users).map(async (userId) => {
          const { name } = users[userId];
          const score = await firebaseFunctions.fetchValidUserScore(
            userId,
            adminId,
            tournamentId
          );
          const stroke = await firebaseFunctions.fetchValidUserStroke(
            userId,
            adminId,
            tournamentId
          );
          const userData = {
            name: name,
            score: score,
            stroke: stroke,
            id: 0,
          };
          table.push(userData);
        })
      );
      let i = 1;
      table.sort(compare);
      table.forEach((obj) => {
        // eslint-disable-next-line no-param-reassign
        obj.id = i;
        i += 1;
        if (obj.name === currentUserData.name) {
          currentUserData.id = obj.id;
        }
      });
      return table;
    };
    const table = await allUsers();
    navigation.navigate('Ranking', {
      table: table,
      currentUser: currentUserData,
    });
  };

  return (
    <View style={styles.maincontainer}>
      <Appbar.Header style={styles.appbar}>
        <Image
          // eslint-disable-next-line global-require
          source={require('../assets/golf-logo-small.png')}
          style={styles.image}
        />
        <Card style={styles.card}>
          <Card.Content style={styles.card}>
            <Title style={styles.title}>{username}</Title>
            {/* <Text style={styles.text}>Score: {updateScore}</Text> */}
            {getScore()}
          </Card.Content>
        </Card>
      </Appbar.Header>
      <Divider style={styles.divider} />
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.roundButton}
          onPress={() => {
            holePressed(1);
          }}
        >
          <Text>Hole 1</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.roundButton}
          onPress={() => {
            holePressed(2);
          }}
        >
          <Text>Hole 2</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.roundButton}
          onPress={() => {
            holePressed(3);
          }}
        >
          <Text>Hole 3</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.roundButton}
          onPress={() => {
            holePressed(4);
          }}
        >
          <Text>Hole 4</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.roundButton}
          onPress={() => {
            holePressed(5);
          }}
        >
          <Text>Hole 5</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.roundButton}
          onPress={() => {
            holePressed(6);
          }}
        >
          <Text>Hole 6</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.roundButton}
          onPress={() => {
            holePressed(7);
          }}
        >
          <Text>Hole 7</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.roundButton}
          onPress={() => {
            holePressed(8);
          }}
        >
          <Text>Hole 8</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.roundButton}
          onPress={() => {
            holePressed(9);
          }}
        >
          <Text>Hole 9</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.roundButton}
          onPress={() => {
            holePressed(10);
          }}
        >
          <Text>Hole 10</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.roundButton}
          onPress={() => {
            holePressed(11);
          }}
        >
          <Text>Hole 11</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.roundButton}
          onPress={() => {
            holePressed(12);
          }}
        >
          <Text>Hole 12</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.roundButton}
          onPress={() => {
            holePressed(13);
          }}
        >
          <Text>Hole 13</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.roundButton}
          onPress={() => {
            holePressed(14);
          }}
        >
          <Text>Hole 14</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.roundButton}
          onPress={() => {
            holePressed(15);
          }}
        >
          <Text>Hole 15</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.roundButton}
          onPress={() => {
            holePressed(16);
          }}
        >
          <Text>Hole 16</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.roundButton}
          onPress={() => {
            holePressed(17);
          }}
        >
          <Text>Hole 17</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.roundButton}
          onPress={() => {
            holePressed(18);
          }}
        >
          <Text>Hole 18</Text>
        </TouchableOpacity>
      </View>
      {/* {pressed ? (
        <ActivityIndicator
          animating={isLoading}
          size="500"
          color={theme.colors.secondary}
        />
      ) : (
        <Button
          style={styles.button}
          labelStyle={styles.buttontext}
          mode="contained"
          onPress={onButtonPressed}
        >
          Tournament Ranking
        </Button>
      )} */}
      <Button
        style={styles.button}
        labelStyle={styles.buttontext}
        mode="contained"
        onPress={onButtonPressed}
      >
        Tournament Ranking
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
        </Dialog>
      </Portal>
    </View>
  );
};

export default Home;
