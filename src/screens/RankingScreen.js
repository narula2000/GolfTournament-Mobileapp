import React from 'react';
import { View, Image } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Button, Appbar, DataTable } from 'react-native-paper';
import styles from '../styles/RankingScreenStyle';

const RankingScreen = () => {
  let ranking = 0;
  const route = useRoute();
  const { table } = route.params;
  const navigation = useNavigation();
  const onBackPressed = () => {
    console.log('button pressed');
    navigation.navigate('HomeScreen');
  };
  const itemsPerPage = 8;
  const [pageNumber, setPage] = React.useState(0);
  const from = pageNumber * itemsPerPage;
  const to = (pageNumber + 1) * itemsPerPage;

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
        {table.map((userInfo) => {
          ranking += 1;
          return (
            <DataTable.Row key={userInfo.name}>
              <DataTable.Cell>{ranking}</DataTable.Cell>
              <DataTable.Cell>{userInfo.name}</DataTable.Cell>
              <DataTable.Cell>{userInfo.score}</DataTable.Cell>
              <DataTable.Cell>{userInfo.score}</DataTable.Cell>
            </DataTable.Row>
          );
        })}
        <DataTable.Pagination
          page={pageNumber}
          numberOfPages={Math.floor(table.length / itemsPerPage)}
          onPageChange={(page) => setPage(page)}
          label={`${from + 1}-${to} of ${table.length}`}
        />
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
