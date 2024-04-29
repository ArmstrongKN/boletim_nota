import { initializeApp, } from "firebase/app";
import { initializeAuth, getReactNativePersistence  } from "firebase/auth";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';


const firebaseConfig = {
  apiKey: "AIzaSyA1OJ8pcB_6-bSVPNH0jvF5sOdlVQJArZ0",
  authDomain: "diario-b0565.firebaseapp.com",
  projectId: "diario-b0565",
  storageBucket: "diario-b0565.appspot.com",
  messagingSenderId: "902239358228",
  appId: "1:902239358228:web:3b61c993fcac250c94c601"
};

const app = initializeApp(firebaseConfig);

initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

export default firebaseConfig;