//import react-native-vector-icons
//import bottom tab navigator
//import material ui
//import react-native-navigation (go through docs)

import React from 'react';
import { Text, View, SafeAreaView, StyleSheet } from 'react-native';
import Router from './navigation/router';
import TransitionToLoginScreen from './screens/LoginScreensHandler/TransitionToLoginScreen';

const App = (props) => {
  return (
    <View>
      {/* <Router/> */}
      <TransitionToLoginScreen/>
    </View>
  );
};

export default App;

