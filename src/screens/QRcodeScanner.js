import React from 'react';
import { View, Alert, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ActivityIndicator, Button, Text } from 'react-native-paper';
import 'firebase/auth';
import { BarCodeScanner } from 'expo-barcode-scanner';
import firebasefunction from '../firebase/functions';
import styles from '../styles/CameraScreenStyle';
import theme from '../core/theme';

const QRcodeScanner = () => {
  const [hasPermission, setHasPermission] = React.useState(null);
  const [isLoading, setLoading] = React.useState(false);
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
      setLoading(true);
      const scannedData = JSON.parse({ data }.data);
      setAdminId(String(scannedData.adminId));
      setTournamentId(String(scannedData.tournamentId));
      const validTournament = await firebasefunction.checkTournament(
        adminId,
        tournamentId
      );
      if (validTournament) {
        navigation.navigate('SignIn', {
          tournamentId: tournamentId,
          adminId: adminId,
        });
        setLoading(false);
      } else {
        setScanned(true);
        setLoading(false);
      }
    } catch (err) {
      Alert.alert(`Contact any staff for tournament QR`);
      setScanned(true);
      setLoading(false);
    }
  };

  if (hasPermission === null) {
    return (
      <View style={styles.container}>
        <Text>Requesting for camera permission</Text>
      </View>
    );
  }
  if (hasPermission === false) {
    return (
      <View style={styles.container}>
        <Text>No access to camera</Text>
      </View>
    );
  }
  return (
    // <View style={styles.container}>
    //   {scanned ? (
    //     <View style={styles.container}>
    //       <BarCodeScanner
    //         onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
    //         style={StyleSheet.absoluteFillObject}
    //       />
    //       <Button style={styles.button} onPress={() => setScanned(false)}>
    //         Tap to scan again
    //       </Button>
    //     </View>
    //   ) : (
    //     <View style={styles.container}>
    //       <BarCodeScanner
    //         onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
    //         style={StyleSheet.absoluteFillObject}
    //       />
    //       <ActivityIndicator
    //         animating={isLoading}
    //         size="500"
    //         color={theme.colors.secondary}
    //       />
    //     </View>
    //   )}
    // </View>

    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      <ActivityIndicator
        animating={isLoading}
        size="500"
        color={theme.colors.secondary}
      />
      {scanned && (
        <Button style={styles.button} onPress={() => setScanned(false)}>
          Tap to Scan Again
        </Button>
      )}
    </View>
  );
};

export default QRcodeScanner;
