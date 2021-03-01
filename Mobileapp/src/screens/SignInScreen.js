import React from "react";
import { View,Text,Button} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
// import { useNavigation } from "@react-navigation/native";
import Logo from "../components/Logo";
import styles from "../components/Background";


const SignInScreen = () => {
	// const { navigate } = useNavigation();
	return (
		<View style={styles.background}>
			<KeyboardAwareScrollView
				resetScrollToCoords={{ x: 0, y: 0 }}
				contentContainerStyle={styles.container}
				keyboardShouldPersistTaps="always"
			>
				<Logo/>
				<Text>Hello World</Text>
				{/* <Button style={styles.roundedBtn} onPress={() => navigate('HomePage')}></Button> */}
			</KeyboardAwareScrollView>
		</View>
	);
};


export default SignInScreen;