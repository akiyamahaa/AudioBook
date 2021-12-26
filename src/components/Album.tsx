// import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import {StyleSheet} from 'react-native';
// import {RootStackProps} from '../navigation/Root';
import {IAudioInfo} from '../utils/firebase';

export type AlbumProps = {
  album: IAudioInfo;
};

const AlbumComponent = (props: AlbumProps) => {
  const {album} = props;
  // const navigation = useNavigation<RootStackProps['navigation']>();

  const onPress = () => {
    // navigation.navigate('PlayerScreen', {audioId: album.audioId});
  };

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Image source={{uri: album.image}} style={styles.image} />
        <Text style={styles.text}>{album.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 155,
    margin: 10,
  },
  image: {
    width: '100%',
    height: 155,
    resizeMode: 'cover',
    borderRadius: 8,
  },
  text: {
    color: 'grey',
    marginTop: 10,
  },
});

export default AlbumComponent;
