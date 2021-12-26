import React from 'react';
import {View, Text, FlatList} from 'react-native';

import {StyleSheet} from 'react-native';
import AlbumComponent from './Album';

export type AlbumCategoryProps = {
  title: string;
  albums: any;
};

const AlbumCategory = (props: AlbumCategoryProps) => (
  <View style={styles.container}>
    <Text style={styles.title}>{props.title}</Text>
    <FlatList
      data={props.albums}
      renderItem={({item}) => <AlbumComponent album={item} />}
      keyExtractor={item => item.id}
      showsHorizontalScrollIndicator={false}
      horizontal
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  title: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    margin: 10,
  },
});

export default AlbumCategory;
