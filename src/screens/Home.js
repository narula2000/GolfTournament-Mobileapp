import React from 'react';
import { View, Image, TouchableOpacity, Text } from 'react-native';
import { Appbar, Divider, Card, Title, Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import styles from '../styles/HomeScreenStyle';
import firebaseFunctions from '../firebase/functions';
// import 'firebase/auth';

const Home = () => {
  const navigation = useNavigation();
  const username = 'Chakeera Wansoh'; // get name from DB
  const currentScore = '100pts'; // get from DB
  const holePressed = async (num) => {
    const mockdata = await firebaseFunctions.fetchSpecificHole(
      '-MW-uAZGeJP37DQawr0i',
      '-MW-uAZGeJP37DQawr0g',
      '-MW-uAZGeJP37DQawr0h',
      `hole${num}`
    );
    const fullscore = await firebaseFunctions.fetchValidUserScore(
      '-MW-uAZGeJP37DQawr0i',
      '-MW-uAZGeJP37DQawr0g',
      '-MW-uAZGeJP37DQawr0h'
    );
    console.log('data ->', mockdata);
    console.log('score ->', fullscore);
    setTimeout(() => {
      navigation.navigate('InfoScreen', {
        hole: num,
      });
    }, 0);
  };
  const onButtonPressed = async () => {
    const users = await firebaseFunctions.fetchValidUserInfo(
      '-MW-uAZGeJP37DQawr0g',
      '-MW-uAZGeJP37DQawr0h'
    );
    const { name } = users.user1;
    const currentUserScore = await firebaseFunctions.fetchValidUserScore(
      'user1',
      '-MW-uAZGeJP37DQawr0g',
      '-MW-uAZGeJP37DQawr0h'
    );
    const currentUserData = {
      name: name,
      score: currentUserScore,
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
            '-MW-uAZGeJP37DQawr0g',
            '-MW-uAZGeJP37DQawr0h'
          );
          const userData = {
            name: name,
            score: score,
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
      // console.log(table);
      console.log(currentUserData);
      return table;
    };
    const table = await allUsers();
    navigation.navigate('RankingMock', {
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
            <Text>{currentScore}</Text>
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
      <Button
        style={styles.button}
        labelStyle={styles.buttontext}
        mode="contained"
        onPress={onButtonPressed}
      >
        Tournament Ranking
      </Button>
    </View>
  );
};

export default Home;
