import { StyleSheet } from "react-native";
import theme from "../core/theme";
// this is default style if you want to make any change you can do in your page with this format 
// if not call this in your page directly

export default StyleSheet.create({
	background: {
		backgroundColor: theme.colors.background,
		flex: 1,
		width: "100%",
	},
	container: {
		alignItems: "center",
		alignSelf: "center",
		flex: 1,
		justifyContent: "center",
		maxWidth: 340,
		padding: 20,
		width: "100%",
	},
});