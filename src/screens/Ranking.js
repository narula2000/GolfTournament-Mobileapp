import React, { useState } from 'react';
import { View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import {
  Button,
  Appbar,
  DataTable,
  Text,
  TextInput,
  Dialog,
  Portal,
} from 'react-native-paper';
import styles from '../styles/RankingScreenStyle';

const RankingScreen = () => {
  const route = useRoute();
  const { table, currentUser } = route.params;
  const navigation = useNavigation();

  const [visible, setVisible] = React.useState(false);
  const [q, setQ] = React.useState('');

  const rankingTable = [];
  const search = (rows) => {
    rows.forEach((obj) => {
      console.log('printing each obj', obj);
      console.log('obj name', obj.name);
      console.log('obj name to Lowercase', obj.name.toLowerCase());
      console.log('obj name to Lowercase[0]', obj.name.toLowerCase[0]);
      console.log('q', q);
      if (obj.name.toLowerCase === q.toLowerCase) {
        console.log('printing each obj', obj);
        console.log('obj name', obj.name);
        console.log('obj name to Lowercase', obj.name.toLowerCase());
        // console.log('obj name to Lowercase[0]', obj.name.toLowerCase[0]);
        console.log('q', q);
        const searchedUserData = {
          name: obj.name,
          score: obj.score,
          id: obj.id,
        };
      }
    });
  };

  const onBackPressed = () => {
    // console.log('button pressed');
    navigation.navigate('HomeScreen');
    // console.log(table);
    // console.log(currentUser);
    console.log('ranking table ->', rankingTable);
    setVisible(true);
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
      <TouchableOpacity
        style={{ marginLeft: 330 }}
        onPress={() => setVisible(true)}
      >
        <Text> Search </Text>
      </TouchableOpacity>
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
          <DataTable.Row style={{ backgroundColor: '#9ed98a' }}>
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
      <Portal>
        <Dialog visible={visible} onDismiss={() => setVisible(false)}>
          <Dialog.Title>Enter your Full Name</Dialog.Title>
          <Dialog.Content>
            <TextInput
              label="name"
              mode="outlined"
              value={q}
              onChangeText={(q) => setQ(q)}
            />
          </Dialog.Content>
          <Dialog.Actions>
            <Button
              onPress={() => {
                search(table);
                setVisible(false);
              }}
            >
              Search
            </Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </View>
  );
};

export default RankingScreen;
