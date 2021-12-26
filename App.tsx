/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {NativeBaseProvider} from 'native-base';
import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import RootStack from './src/navigation/Root';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#222831',
    primary: 'rgb(255, 45, 85)',
  },
};

const App = () => {
  return (
    <SafeAreaProvider style={[styles.root]}>
      <NativeBaseProvider>
        <NavigationContainer theme={MyTheme}>
          <SafeAreaView />
          <StatusBar barStyle={'light-content'} />
          <RootStack />
        </NavigationContainer>
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
