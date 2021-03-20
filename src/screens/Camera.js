import React from 'react';
import { View, Alert, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button, Text } from 'react-native-paper';
import 'firebase/auth';
import { BarCodeScanner } from 'expo-barcode-scanner';
import firebasefunction from '../firebase/functions';
import styles from '../styles/CameraScreenStyle';

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
  const handleBarCodeScanned = async ({ data }) => {
    try {
      const scannedData = JSON.parse({ data }.data);
      setAdminId(String(scannedData.adminId));
      setTournamentId(String(scannedData.tournamentId));
      await firebasefunction
        .checkTournament(adminId, tournamentId)
        .then((result) => {
          if (result) {
            navigation.navigate('SignIn', {
              tournamentId: tournamentId,
              adminId: adminId,
            });
          } else {
            setScanned(true);
          }
        });
    } catch (err) {
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
        <Button style={styles.button} onPress={() => setScanned(false)}>
          Wrong QR code Scan Again
        </Button>
      )}
    </View>
  );
};

export default Camera;
