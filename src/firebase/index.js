import {
  REACT_APP_FIREBASE_API_KEY,
  REACT_APP_FIREBASE_AUTH_DOMAIN,
  REACT_APP_FIREBASE_DB_URL,
  REACT_APP_FIREBASE_PROJECT_ID,
  REACT_APP_FIREBASE_STORAGE_BUCKET,
  REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  REACT_APP_FIREBASE_APP_ID,
  // eslint-disable-next-line import/no-unresolved
} from '@env';

const firebaseConfig = {
  apiKey: REACT_APP_FIREBASE_API_KEY,
  appId: REACT_APP_FIREBASE_APP_ID,
  authDomain: REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: REACT_APP_FIREBASE_DB_URL,
  messagingSenderId: REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  projectId: REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: REACT_APP_FIREBASE_STORAGE_BUCKET,
};

export default firebaseConfig;
