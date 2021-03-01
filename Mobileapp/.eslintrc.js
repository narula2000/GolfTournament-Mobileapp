module.exports = {
	"env": {
		"node": true,
		"es6": true,
		"react-native/react-native": true,
	},
	"extends": [
		"eslint:recommended",
		"plugin:react/recommended",
		"plugin:react-native/all",
		"plugin:jsx-control-statements/recommended",
	],
	"parserOptions": {
		"ecmaFeatures": {
			"jsx": true
		},
		"ecmaVersion": 12,
		"sourceType": "module",
	},
	"plugins": [
		"import",
		"react",
		"react-hooks",
		"react-native",
		"jsx-control-statements",
	],
	"rules": {
		"indent": [
			"error",
			"tab"
		],
		"linebreak-style": [
			"error",
			"unix"
		],
		"quotes": [
			"error",
			"double"
		],
		"semi": [
			"error",
			"always"
		],
		"no-console": process.env.NODE_ENV === "production" ? "error" : "off",
		"no-use-before-define": "off",
		"react/prop-types": "off",
	}
};
