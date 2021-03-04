import React, { useEffect } from 'react';
import { View, StyleSheet, LogBox, Text } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import SearchableDropdown from 'react-native-searchable-dropdown';
import { Button } from 'react-native-paper';
import Logo from '../components/Logo';
import Background from '../components/Background';
import theme from '../core/theme';

const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.colors.secondary,
    borderRadius: 20,
    height: 59,
    justifyContent: 'center',
    marginVertical: 20,
    width: 'auto',
  },
  buttontext: {
    fontSize: 15,
    fontWeight: 'bold',
    color: theme.colors.white,
  },
  textinput: {
    fontSize: 15,
    fontWeight: 'bold',
    backgroundColor: theme.colors.white,
    width: 300, // width of device and subtract
    padding: 12,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  listtext: {
    padding: 15,
    marginTop: 2,
    backgroundColor: '#FAF9F8',
    borderColor: '#bbb',
    borderWidth: 1,
    width: '100%',
  },
  text: { fontWeight: 'bold', fontSize: 20, padding: 10 },
});

const SignInScreen = () => {
  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }, []);
  const items = [
    // name key is must.It is to show the text in front.It is the syntax!!!
    { id: 1, name: 'chakeera' },
    { id: 2, name: 'mai' },
    { id: 3, name: 'tasfia' },
    { id: 4, name: 'near' },
    { id: 5, name: 'vicky' },
    { id: 6, name: 'aj boy' },
    { id: 7, name: 'max' },
    { id: 8, name: 'harvey' },
    { id: 9, name: 'parm' },
    { id: 10, name: 'cha' },
    { id: 11, name: 'fatimah' },
    { id: 12, name: 'venus' },
    { id: 13, name: 'wawa' },
  ];
  // const { navigate } = useNavigation();
  const [data, setData] = React.useState('');
  const onEnterPressed = () => {
    console.log('button pressed');
    console.log(data);
  };
  return (
    <View style={Background.background}>
      <KeyboardAwareScrollView
        resetScrollToCoords={{ x: 0, y: 0 }}
        contentContainerStyle={Background.container}
        keyboardShouldPersistTaps="always"
      >
        <Logo />
        <Text style={styles.text}>Enter Name or Phone Number</Text>
        <SearchableDropdown
          onTextChange={(text) => console.log(text)}
          onItemSelect={(item) => {
            setData(item.name);
            console.log('data is setted');
          }}
          // onItemSelect={(item) => Alert.alert(JSON.stringify(item))}
          containerStyle={{ padding: 5 }}
          textInputStyle={styles.textinput}
          itemStyle={styles.listtext}
          itemTextStyle={{
            color: '#222',
          }}
          itemsContainerStyle={{
            maxHeight: 200,
          }}
          items={items}
          placeholder={data}
          placeholderTextColor={theme.colors.primary}
          resetValue={false}
          underlineColorAndroid="transparent"
        />
        <Button
          style={styles.button}
          labelStyle={styles.buttontext}
          mode="contained"
          onPress={onEnterPressed}
        >
          Enter Tournament
        </Button>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default SignInScreen;
