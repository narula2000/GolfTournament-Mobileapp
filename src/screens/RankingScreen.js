import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Text,
  Dimensions,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useNavigation } from '@react-navigation/native';
import { Button, Appbar, DataTable, Card } from 'react-native-paper';
import theme from '../core/theme';

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

const styles = StyleSheet.create({
  view: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
  },
  appbar: {
    backgroundColor: theme.colors.background,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: 120,
    position: 'relative',
    marginBottom: 12,
    marginTop: 100,
    width: 128,
    alignItems: 'center',
    zIndex: 2,
  },
  table: {
    backgroundColor: theme.colors.background,
    width: 350,
    marginTop: 70,
    marginLeft: 35,
    justifyContent: 'center',
  },
  ranking: {
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: theme.colors.secondary,
    borderRadius: 20,
    height: 45,
    justifyContent: 'center',
    marginVertical: 20,
    marginLeft: 90,
    width: 230,
  },
  buttontext: {
    fontSize: 15,
    fontWeight: 'bold',
    justifyContent: 'center',
  },
});

const RankingScreen = () => {
  const navigation = useNavigation();
  const onBackPressed = () => {
    console.log('button pressed');
    navigation.navigate('AddInfoScreen');
  };
  return (
    <View>
      <Appbar.Header style={styles.appbar}>
        <Image
          source={require('../assets/golf-logo-small.png')}
          style={styles.image}
        />
      </Appbar.Header>
      <DataTable style={styles.table}>
        <DataTable.Header>
          <DataTable.Title numeric style={styles.ranking}>
            {' '}
            Ranking{' '}
          </DataTable.Title>
          <DataTable.Title>Username</DataTable.Title>
          <DataTable.Title numeric>Stroke</DataTable.Title>
          <DataTable.Title numeric>Score</DataTable.Title>
        </DataTable.Header>
      </DataTable>
      <Button
        style={styles.button}
        labelStyle={styles.buttontext}
        mode="contained"
        onPress={onBackPressed}
      >
        Back to Home Page
      </Button>
    </View>
  );
};

export default RankingScreen;
