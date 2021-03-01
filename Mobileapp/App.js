import React from "react";
import Routes from "./src/routes";
import { Provider } from "react-native-paper";
import {theme} from "./src/core/theme";


const Main = () => (
	<Provider theme={theme}>
		<Routes />
	</Provider>
);

export default Main;