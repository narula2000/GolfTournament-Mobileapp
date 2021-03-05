import React from 'react';
import {
  View,
  Dimensions,
  Image,
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';
import { Appbar, Divider, Card, Title } from 'react-native-paper';
import theme from '../core/theme';

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    width: screenWidth,
    height: screenHeight,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
    padding: 3,
  },
  appbar: {
    backgroundColor: theme.colors.background,
    height: 100,
    width: screenWidth,
    flexDirection: 'row',
  },
  image: {
    height: 120,
    position: 'relative',
    width: 128,
    zIndex: 2,
  },
  button: {
    backgroundColor: theme.colors.secondary,
    borderRadius: 20,
    height: 59,
    justifyContent: 'center',
    marginVertical: 20,
    width: 'auto',
  },
  buttontext: {
    fontSize: 15,
    fontWeight: 'bold',
    color: theme.colors.white,
  },
  title: {
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  roundButton: {
    marginVertical: 5,
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 100,
    backgroundColor: theme.colors.button_border,
  },
});

const HomeScreen = () => {
  const Username = 'Chakeera Wansoh'; // get name from DB
  return (
    <View style={styles.maincontainer}>
      <Appbar.Header style={styles.appbar}>
        <Image
          // eslint-disable-next-line global-require
          source={require('../assets/golf-logo-small.png')}
          style={styles.image}
        />
        <Card
          style={{
            backgroundColor: theme.colors.ourgreen,
            height: 80,
            width: screenWidth - 140,
          }}
        >
          <Card.Content>
            <Title style={styles.title}>{Username}</Title>
          </Card.Content>
        </Card>
      </Appbar.Header>
      <Divider style={{ backgroundColor: theme.colors.ourgreen, height: 6 }} />
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
    </View>
  );
};

export default HomeScreen;
