import React, { useState } from 'react';
import {
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
// import { SearchBar } from 'react-native-elements';
import { useNavigation, useRoute } from '@react-navigation/native';
import {
  Button,
  Appbar,
  DataTable,
  Text,
  Dialog,
  Portal,
  Searchbar,
} from 'react-native-paper';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from '../styles/RankingMockStyle';

const RankingMock = () => {
  const route = useRoute();
  const { table, currentUser } = route.params;
  const navigation = useNavigation();

  // const [visible, setVisible] = React.useState(false);
  // const [searched, setSearched] = React.useState(false);
  const [q, setQ] = React.useState('');

  // const rankingTable = [];
  const searchPlayer = (rows) =>
    rows.filter((row) => row.name.toLowerCase().search(q.toLowerCase()) > -1);
  // console.log(tableSearch);
  // rows.forEach((obj) => {
  //   console.log('printing each obj', obj);
  //   console.log('obj name', obj.name);
  //   console.log('obj name to Lowercase', obj.name.toLowerCase());
  //   console.log('obj name to Lowercase[0]', obj.name.toLowerCase[0]);
  //   console.log('q', q);
  //   if (obj.name.toLowerCase === q.toLowerCase) {
  //     console.log('printing each obj', obj);
  //     console.log('obj name', obj.name);
  //     console.log('obj name to Lowercase', obj.name.toLowerCase());
  //     // console.log('obj name to Lowercase[0]', obj.name.toLowerCase[0]);
  //     console.log('q', q);
  //     const searchedUserData = {
  //       name: obj.name,
  //       score: obj.score,
  //       id: obj.id,
  //     };
  //   }
  // });

  const onBackPressed = () => {
    console.log('button pressed');
    navigation.navigate('HomeScreen');
    // console.log(table);
    // console.log(currentUser);
    console.log('ranking table ->', searchPlayer(table));
    // setVisible(true);
  };

  return (
    <View>
      <KeyboardAwareScrollView resetScrollToCoords={{ x: 0, y: 0 }}>
        <Appbar.Header style={styles.appbar}>
          <TouchableOpacity onPress={onBackPressed} style={styles.container}>
            <Icon
              name="less-than"
              size={20}
              color="black"
              style={{ marginLeft: 10 }}
            />
          </TouchableOpacity>
          <Image
            // eslint-disable-next-line global-require
            source={require('../assets/golf-logo-small.png')}
            style={styles.image}
          />
          {/* <TouchableOpacity onPress={() => setVisible(true)} style={styles.nBtn}>
          <Icon
            name="account-search"
            size={20}
            color="white"
            style={{ marginLeft: 10 }}
          />
          <Text style={{ fontSize: 18, color: 'white' }}> Search </Text>
        </TouchableOpacity> */}
        </Appbar.Header>
        <Searchbar
          value={q}
          placeholder="  Search Player"
          onChangeText={(e) => setQ(e)}
          style={styles.searchBar}
        />
        <DataTable style={styles.table}>
          <DataTable.Header style={{ fontSize: 50 }}>
            <DataTable.Title numeric style={styles.column1}>
              <Text style={styles.text}> # </Text>
            </DataTable.Title>
            <DataTable.Title style={{ marginLeft: -30 }}>
              <Text style={styles.text}> Username</Text>
            </DataTable.Title>
            <DataTable.Title numeric style={{ marginLeft: 40 }}>
              <Text style={styles.text}> Stroke </Text>
            </DataTable.Title>
            <DataTable.Title numeric style={{ marginLeft: -30 }}>
              <Text style={styles.text}> Score </Text>
            </DataTable.Title>
          </DataTable.Header>
          <ScrollView>
            <DataTable.Row style={{ backgroundColor: '#86cf6c' }}>
              <DataTable.Cell style={{ flex: 1 }}>
                <Text style={styles.text}>{currentUser.id}</Text>
              </DataTable.Cell>
              <DataTable.Cell style={{ flex: 3 }}>
                <Text style={styles.text}>{currentUser.name}</Text>
              </DataTable.Cell>
              <DataTable.Cell>
                {' '}
                <Text style={styles.text}>{currentUser.score}</Text>
              </DataTable.Cell>
              <DataTable.Cell style={{ flex: 'auto' }}>
                <Text style={styles.text}>{currentUser.score}</Text>
              </DataTable.Cell>
            </DataTable.Row>
            {/* {searched
            ? searchPlayer
        (table).map((userInfo) => (
                <DataTable.Row key={userInfo.name}>
                  <DataTable.Cell style={{ flex: 1 }}>
                    {userInfo.id}
                  </DataTable.Cell>
                  <DataTable.Cell style={{ flex: 3 }}>
                    {userInfo.name}
                  </DataTable.Cell>
                  <DataTable.Cell>{userInfo.score}</DataTable.Cell>
                  <DataTable.Cell style={{ flex: 'auto' }}>
                    {userInfo.score}
                  </DataTable.Cell>
                </DataTable.Row>
              ))
            : table.map((userInfo) => (
                <DataTable.Row key={userInfo.name}>
                  <DataTable.Cell style={{ flex: 1 }}>
                    {userInfo.id}
                  </DataTable.Cell>
                  <DataTable.Cell style={{ flex: 3 }}>
                    {userInfo.name}
                  </DataTable.Cell>
                  <DataTable.Cell>{userInfo.score}</DataTable.Cell>
                  <DataTable.Cell style={{ flex: 'auto' }}>
                    {userInfo.score}
                  </DataTable.Cell>
                </DataTable.Row>
              ))} */}
            {searchPlayer(table).map((userInfo) => (
              <DataTable.Row
                key={userInfo.name}
                style={userInfo.id % 2 === 0 ? styles.evenRow : styles.oddRow}
              >
                <DataTable.Cell style={{ flex: 1 }}>
                  <Text style={styles.text}>{userInfo.id} </Text>
                </DataTable.Cell>
                <DataTable.Cell style={{ flex: 3 }}>
                  <Text style={styles.text}>{userInfo.name}</Text>
                </DataTable.Cell>
                <DataTable.Cell>
                  <Text style={styles.text}>{userInfo.score}</Text>
                </DataTable.Cell>
                <DataTable.Cell style={{ flex: 'auto' }}>
                  <Text style={styles.text}>{userInfo.score}</Text>
                </DataTable.Cell>
              </DataTable.Row>
            ))}
          </ScrollView>
        </DataTable>

        {/* <Button
        style={styles.button}
        labelStyle={styles.buttontext}
        mode="contained"
        onPress={onBackPressed}
      >
        Back to Home Page
      </Button> */}
        {/* <Portal>
        <Dialog visible={visible} onDismiss={() => setVisible(false)}>
          <Dialog.Title>Enter your Full Name</Dialog.Title>
          <Dialog.Content>
            <TextInput value={q} onChangeText={(e) => setQ(e)} />
          </Dialog.Content>
          <Dialog.Actions>
            <Button
              onPress={() => {
                searchPlayer(table);
                setVisible(false);
              }}
            >
              Search
            </Button>
          </Dialog.Actions>
        </Dialog>
      </Portal> */}
      </KeyboardAwareScrollView>
    </View>
  );
};

export default RankingMock;
