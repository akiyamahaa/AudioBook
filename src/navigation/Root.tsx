import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import React from 'react';
import HomeScreen2 from '../screens/home/HomeScreen2';
import MusicPlayerScreen from '../screens/player/MusicPlayerScreen';

interface Props {}

export type RootStackParamList = {
  HomeScreen: undefined;
  PlayerScreen: {audioId: number};
};

export type RootStackProps = NativeStackScreenProps<RootStackParamList>;

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootStack = (props: Props) => {
  const {} = props;
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="HomeScreen">
      <Stack.Screen name="HomeScreen" component={HomeScreen2} />
      <Stack.Screen name="PlayerScreen" component={MusicPlayerScreen} />
    </Stack.Navigator>
  );
};

export default RootStack;
