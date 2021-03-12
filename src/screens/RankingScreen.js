import React from 'react';
import { View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button, Appbar, DataTable } from 'react-native-paper';
import styles from '../styles/RankingScreenStyle';

const RankingScreen = () => {
  const navigation = useNavigation();
  const onBackPressed = () => {
    console.log('button pressed');
    navigation.navigate('HomeScreen');
  };
  return (
    <View>
      <Appbar.Header style={styles.appbar}>
        <Image
          // eslint-disable-next-line global-require
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
