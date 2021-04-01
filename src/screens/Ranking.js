import React, { useState } from 'react';
import { View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Appbar, DataTable, Text, Searchbar } from 'react-native-paper';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from '../styles/RankingStyle';

const RankingMock = () => {
  const route = useRoute();
  const { table, currentUser } = route.params;
  const navigation = useNavigation();
  const [q, setQ] = React.useState('');

  const searchPlayer = (rows) =>
    rows.filter((row) => row.name.toLowerCase().search(q.toLowerCase()) > -1);

  const onBackPressed = () => {
    navigation.navigate('Home');
  };

  return (
    <View>
      <KeyboardAwareScrollView resetScrollToCoords={{ x: 0, y: 0 }}>
        <Appbar.Header style={styles.appbar}>
          <TouchableOpacity onPress={onBackPressed} style={styles.backBtn}>
            <Icon name="less-than" size={20} color="black" />
            <Text> BACK </Text>
          </TouchableOpacity>
          <Image
            // eslint-disable-next-line global-require
            source={require('../assets/golf-logo-small.png')}
            style={styles.image}
          />
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
                <Text style={styles.text}>{currentUser.stroke}</Text>
              </DataTable.Cell>
              <DataTable.Cell style={{ flex: 'auto' }}>
                <Text style={styles.text}>{currentUser.score}</Text>
              </DataTable.Cell>
            </DataTable.Row>
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
                  <Text style={styles.text}>{userInfo.stroke}</Text>
                </DataTable.Cell>
                <DataTable.Cell style={{ flex: 'auto' }}>
                  <Text style={styles.text}>{userInfo.score}</Text>
                </DataTable.Cell>
              </DataTable.Row>
            ))}
          </ScrollView>
        </DataTable>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default RankingMock;
