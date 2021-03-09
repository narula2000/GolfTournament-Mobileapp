import React from 'react';
import { View, Image, TouchableOpacity, Text } from 'react-native';
import { Appbar, Divider, Card, Title, Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import styles from '../styles/HomeScreenStyle';

const HomeScreen = () => {
  const navigation = useNavigation();
  const username = 'Chakeera Wansoh'; // get name from DB
  const currentScore = '100pts'; // get from DB
  const onEnterPressed = () => {
    navigation.navigate('InfoScreen');
  };
  const onButtonPressed = () => {
    navigation.navigate('RankingScreen');
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
        <TouchableOpacity onPress={onEnterPressed} style={styles.roundButton}>
          <Text>1</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={onEnterPressed} style={styles.roundButton}>
          <Text>2</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onEnterPressed} style={styles.roundButton}>
          <Text>3</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onEnterPressed} style={styles.roundButton}>
          <Text>4</Text>
        </TouchableOpacity>
        <TouchableOpacity
          // onPress={buttonClickedHandler}
          style={styles.roundButton}
        >
          <Text>5</Text>
        </TouchableOpacity>
        <TouchableOpacity
          // onPress={buttonClickedHandler}
          style={styles.roundButton}
        >
          <Text>6</Text>
        </TouchableOpacity>
        <TouchableOpacity
          // onPress={buttonClickedHandler}
          style={styles.roundButton}
        >
          <Text>7</Text>
        </TouchableOpacity>
        <TouchableOpacity
          // onPress={buttonClickedHandler}
          style={styles.roundButton}
        >
          <Text>8</Text>
        </TouchableOpacity>
        <TouchableOpacity
          // onPress={buttonClickedHandler}
          style={styles.roundButton}
        >
          <Text>9</Text>
        </TouchableOpacity>
        <TouchableOpacity
          // onPress={buttonClickedHandler}
          style={styles.roundButton}
        >
          <Text>10</Text>
        </TouchableOpacity>
        <TouchableOpacity
          // onPress={buttonClickedHandler}
          style={styles.roundButton}
        >
          <Text>11</Text>
        </TouchableOpacity>
        <TouchableOpacity
          // onPress={buttonClickedHandler}
          style={styles.roundButton}
        >
          <Text>12</Text>
        </TouchableOpacity>
        <TouchableOpacity
          // onPress={buttonClickedHandler}
          style={styles.roundButton}
        >
          <Text>13</Text>
        </TouchableOpacity>
        <TouchableOpacity
          // onPress={buttonClickedHandler}
          style={styles.roundButton}
        >
          <Text>14</Text>
        </TouchableOpacity>
        <TouchableOpacity
          // onPress={buttonClickedHandler}
          style={styles.roundButton}
        >
          <Text>15</Text>
        </TouchableOpacity>
        <TouchableOpacity
          // onPress={buttonClickedHandler}
          style={styles.roundButton}
        >
          <Text>16</Text>
        </TouchableOpacity>
        <TouchableOpacity
          // onPress={buttonClickedHandler}
          style={styles.roundButton}
        >
          <Text>17</Text>
        </TouchableOpacity>
        <TouchableOpacity
          // onPress={buttonClickedHandler}
          style={styles.roundButton}
        >
          <Text>18</Text>
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

export default HomeScreen;
