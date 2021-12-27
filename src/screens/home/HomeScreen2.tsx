import {Box, ScrollView, Text} from 'native-base';
import React from 'react';
import {StyleSheet} from 'react-native';
import AlbumComponent from '../../components/Album';
import {songs} from '../../utils/mock-data';

const HomeScreen2 = () => {
  return (
    <Box style={styles.root}>
      <Box style={styles.titleContainer}>
        <Text color="#fff" fontSize={32}>
          Truyện cổ tích sách nói
        </Text>
      </Box>
      <ScrollView style={styles.container}>
        <Box alignItems={'center'}>
          <Text bold p="4" fontSize={24}>
            Danh sách truyện
          </Text>
        </Box>
        <Box
          flexDirection="row"
          flexWrap={'wrap'}
          justifyContent={'space-around'}>
          {songs.map(audio => (
            <AlbumComponent album={audio} key={audio.id} />
          ))}
        </Box>
      </ScrollView>
    </Box>
  );
};

export default HomeScreen2;

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  container: {
    backgroundColor: '#fff',
    borderTopRightRadius: 42,
    borderTopLeftRadius: 42,
    marginTop: 40,
  },
  titleContainer: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
});
