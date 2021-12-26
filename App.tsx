/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import {NativeBaseProvider} from 'native-base';
import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import HomeScreen2 from './src/screens/home/HomeScreen2';

const App = () => {
  return (
    <SafeAreaProvider style={[styles.root]}>
      <NativeBaseProvider>
        {/* <NavigationContainer> */}
        <SafeAreaView />
        <StatusBar barStyle={'light-content'} />
        <HomeScreen2 />
        {/* </NavigationContainer> */}
      </NativeBaseProvider>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#222831',
    justifyContent: 'center',
  },
});

export default App;
