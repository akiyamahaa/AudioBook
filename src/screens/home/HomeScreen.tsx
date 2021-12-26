import {Box, FlatList} from 'native-base';
import React from 'react';
import {StyleSheet} from 'react-native';
import AlbumCategory from '../../components/AlbumCategory';
import {albumCategories} from '../../utils/data';
// import SongListItem from './components/SongListItem';

const HomeScreen = () => {
  return (
    <Box>
      <FlatList
        data={albumCategories}
        renderItem={({item}) => (
          <AlbumCategory title={item.title} albums={item.albums} />
        )}
        keyExtractor={item => item.id}
      />
    </Box>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
