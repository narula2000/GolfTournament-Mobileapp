import React from 'react';
import { View, Alert, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button, Text } from 'react-native-paper';
import 'firebase/auth';
import { BarCodeScanner } from 'expo-barcode-scanner';
import firebasefunction from '../firebase/functions';
import theme from '../core/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: theme.colors.secondary,
    borderRadius: 20,
    height: 45,
    justifyContent: 'center',
    marginVertical: 20,
    width: 'auto',
  },
  buttontext: {
    fontSize: 15,
    fontWeight: 'bold',
    color: theme.colors.white,
  },
});

const Camera = () => {
  const [hasPermission, setHasPermission] = React.useState(null);
  const [scanned, setScanned] = React.useState(false);
  const [tournamentId, setTournamentId] = React.useState('');
  const [adminId, setAdminId] = React.useState('');
  const navigation = useNavigation();

  React.useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);
  const handleBarCodeScanned = ({ data }) => {
    try {
      const scannedData = JSON.parse({ data }.data);
      setAdminId(String(scannedData.adminId));
      setTournamentId(String(scannedData.tournamentId));
      if (
        firebasefunction.checkTournament(
          String({ adminId }),
          String({ tournamentId })
        )
      ) {
        navigation.navigate('SignIn', { tournamentId, adminId });
      }
    } catch (err) {
      console.log(err);
      setScanned(true);
      Alert.alert(`Tournament Not Found`);
    }
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      {scanned && (
        <Button onPress={() => setScanned(false)}>Tap to Scan Again</Button>
      )}
    </View>
  );
};

export default Camera;
