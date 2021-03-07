import React from 'react';
import { View, Image, TouchableOpacity, Text } from 'react-native';
import { Appbar, Divider, Card, Title, Button } from 'react-native-paper';
import styles from '../styles/HomeScreenStyle';

const HomeScreen = () => {
  const username = 'Chakeera Wansoh'; // get name from DB
  const currentScore = '100pts'; // get from DB
  const onEnterPressed = () => {};
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
          // onPress={buttonClickedHandler}
          style={styles.roundButton}
        >
          <Text>Hole 1</Text>
        </TouchableOpacity>

        <TouchableOpacity
          // onPress={buttonClickedHandler}
          style={styles.roundButton}
        >
          <Text>Hole 2</Text>
        </TouchableOpacity>
        <TouchableOpacity
          // onPress={buttonClickedHandler}
          style={styles.roundButton}
        >
          <Text>Hole 3</Text>
        </TouchableOpacity>
        <TouchableOpacity
          // onPress={buttonClickedHandler}
          style={styles.roundButton}
        >
          <Text>Hole 4</Text>
        </TouchableOpacity>
        <TouchableOpacity
          // onPress={buttonClickedHandler}
          style={styles.roundButton}
        >
          <Text>Hole 5</Text>
        </TouchableOpacity>
        <TouchableOpacity
          // onPress={buttonClickedHandler}
          style={styles.roundButton}
        >
          <Text>Hole 6</Text>
        </TouchableOpacity>
        <TouchableOpacity
          // onPress={buttonClickedHandler}
          style={styles.roundButton}
        >
          <Text>Hole 7</Text>
        </TouchableOpacity>
        <TouchableOpacity
          // onPress={buttonClickedHandler}
          style={styles.roundButton}
        >
          <Text>Hole 8</Text>
        </TouchableOpacity>
        <TouchableOpacity
          // onPress={buttonClickedHandler}
          style={styles.roundButton}
        >
          <Text>Hole 9</Text>
        </TouchableOpacity>
        <TouchableOpacity
          // onPress={buttonClickedHandler}
          style={styles.roundButton}
        >
          <Text>Hole 10</Text>
        </TouchableOpacity>
        <TouchableOpacity
          // onPress={buttonClickedHandler}
          style={styles.roundButton}
        >
          <Text>Hole 11</Text>
        </TouchableOpacity>
        <TouchableOpacity
          // onPress={buttonClickedHandler}
          style={styles.roundButton}
        >
          <Text>Hole 12</Text>
        </TouchableOpacity>
        <TouchableOpacity
          // onPress={buttonClickedHandler}
          style={styles.roundButton}
        >
          <Text>Hole 13</Text>
        </TouchableOpacity>
        <TouchableOpacity
          // onPress={buttonClickedHandler}
          style={styles.roundButton}
        >
          <Text>Hole 14</Text>
        </TouchableOpacity>
        <TouchableOpacity
          // onPress={buttonClickedHandler}
          style={styles.roundButton}
        >
          <Text>Hole 15</Text>
        </TouchableOpacity>
        <TouchableOpacity
          // onPress={buttonClickedHandler}
          style={styles.roundButton}
        >
          <Text>Hole 16</Text>
        </TouchableOpacity>
        <TouchableOpacity
          // onPress={buttonClickedHandler}
          style={styles.roundButton}
        >
          <Text>Hole 17</Text>
        </TouchableOpacity>
        <TouchableOpacity
          // onPress={buttonClickedHandler}
          style={styles.roundButton}
        >
          <Text>Hole 18</Text>
        </TouchableOpacity>
      </View>
      <Button
        style={styles.button}
        labelStyle={styles.buttontext}
        mode="contained"
        onPress={onEnterPressed}
      >
        Tournament Ranking
      </Button>
    </View>
  );
};

export default HomeScreen;
