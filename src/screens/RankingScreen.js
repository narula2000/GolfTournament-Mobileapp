import React from 'react';
import { View, Image, ScrollView } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Button, Appbar, DataTable } from 'react-native-paper';
import styles from '../styles/RankingScreenStyle';

const RankingScreen = () => {
  const route = useRoute();
  const { table, currentUser } = route.params;
  const navigation = useNavigation();
  const onBackPressed = () => {
    console.log('button pressed');
    navigation.navigate('HomeScreen');
    console.log(table);
    console.log(currentUser);
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
          <DataTable.Title numeric style={styles.column1}>
            {' '}
            #{' '}
          </DataTable.Title>
          <DataTable.Title style={{ marginLeft: -30 }}>
            Username
          </DataTable.Title>
          <DataTable.Title numeric style={{ marginLeft: 40 }}>
            Stroke
          </DataTable.Title>
          <DataTable.Title numeric style={{ marginLeft: -30 }}>
            Score
          </DataTable.Title>
        </DataTable.Header>
        <ScrollView>
          <DataTable.Row>
            <DataTable.Cell style={{ flex: 1 }}>
              {currentUser.id}
            </DataTable.Cell>
            <DataTable.Cell style={{ flex: 3 }}>
              {currentUser.name}
            </DataTable.Cell>
            <DataTable.Cell>{currentUser.score}</DataTable.Cell>
            <DataTable.Cell style={{ flex: 'auto' }}>
              {currentUser.score}
            </DataTable.Cell>
          </DataTable.Row>
          {table.map((userInfo) => (
            <DataTable.Row key={userInfo.name}>
              <DataTable.Cell style={{ flex: 1 }}>{userInfo.id}</DataTable.Cell>
              <DataTable.Cell style={{ flex: 3 }}>
                {userInfo.name}
              </DataTable.Cell>
              <DataTable.Cell>{userInfo.score}</DataTable.Cell>
              <DataTable.Cell style={{ flex: 'auto' }}>
                {userInfo.score}
              </DataTable.Cell>
            </DataTable.Row>
          ))}
        </ScrollView>
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
