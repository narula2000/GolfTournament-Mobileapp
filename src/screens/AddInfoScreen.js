import React from 'react';
import { View, StyleSheet, Image, TextInput } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
// import { useNavigation } from "@react-navigation/native";
import { Appbar, Button, Card, Divider, Text, Title } from 'react-native-paper';
import Logo from '../components/Logo';
import Background from '../components/Background';
import theme from '../core/theme';

const styles = StyleSheet.create({
  view: {
    flex: 1,
    width: '100%',
    backgroundColor: theme.colors.white,
  },
  appbar: {
    backgroundColor: theme.colors.background,
    height: 110,
    width: 'auto',
  },
  image: {
    height: 120,
    position: 'relative',
    marginBottom: 12,
    marginTop: 10,
    width: 128,
    zIndex: 2,
  },
  appbar_card: {
    backgroundColor: theme.colors.ourgreen,
    height: 70,
    width: 180,
    marginLeft: 45,
  },
  appbar_card_text: {
    alignItems: 'center',
    marginTop: 8,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    justifyContent: 'center',
  },
  divider: {
    backgroundColor: theme.colors.ourgreen,
    height: 6,
  },
  info_view: {
    flexDirection: 'row',
    marginTop: 20,
  },
  info_text: {
    fontSize: 20,
  },
  counter_button: {
    backgroundColor: theme.colors.white,
    borderRadius: 10,
    marginLeft: 20,
    borderColor: theme.colors.button_border,
    width: '2%',
  },
  cbtn_icon: {
    color: 'black',
    justifyContent: 'center',
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

const AddInfoScreen = () => {
  // const { navigate } = useNavigation();
  const onEnterPressed = () => {
    console.log('button pressed');
  };
  return (
    <View style={styles.view}>
      <Appbar.Header style={styles.appbar}>
        <Image
          // eslint-disable-next-line global-require
          source={require('../assets/golf-logo-small.png')}
          style={styles.image}
        />
        <View>
          <Text> Hole 1 </Text>
          <Text> Par 3</Text>
          <Text> S.I 9</Text>
        </View>
        <Card style={styles.appbar_card}>
          <Text style={styles.appbar_card_text}> Chakeera Cute</Text>
          <Text style={styles.appbar_card_text}> To Par +4</Text>
        </Card>
      </Appbar.Header>
      <Divider style={styles.divider} />
      <View style={styles.info_view}>
        <Text style={styles.info_text}> Total Stroke</Text>
        <Button
          icon="minus"
          style={styles.counter_button}
          mode="outlined"
          labelStyle={styles.cbtn_icon}
          onPress={onEnterPressed}
        >
          {' '}
        </Button>
        <TextInput> </TextInput>
      </View>
      <Button
        style={styles.button}
        labelStyle={styles.buttontext}
        mode="contained"
        onPress={onEnterPressed}
      >
        Submit
      </Button>
      <Button
        style={styles.button}
        labelStyle={styles.buttontext}
        mode="contained"
        onPress={onEnterPressed}
      >
        Back to Score Page
      </Button>
    </View>
  );
};

export default AddInfoScreen;
