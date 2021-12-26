import {Box, ScrollView, Text} from 'native-base';
import React, {useEffect, useState} from 'react';
import {StyleSheet} from 'react-native';
import AlbumComponent from '../../components/Album';
// import SongListItem from './components/SongListItem';
import {collection, getDocs} from 'firebase/firestore/lite';
import {db, IAudioInfo} from '../../utils/firebase';

const HomeScreen2 = () => {
  const [listAudio, setListAudio] = useState<IAudioInfo[]>([]);

  const getData = async () => {
    const resultCol = collection(db, 'audio-info');
    const resultSnapshot = await getDocs(resultCol);
    const resultList = resultSnapshot.docs.map((doc: any) => doc.data());
    setListAudio(resultList);
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(
    '🚀 ~ file: HomeScreen2.tsx ~ line 12 ~ HomeScreen2 ~ listAudio',
    listAudio,
  );

  return (
    <ScrollView style={styles.container}>
      <Box alignItems={'center'}>
        <Text bold p="4" fontSize={24}>
          Danh sách sách nói
        </Text>
      </Box>
      <Box
        flexDirection="row"
        flexWrap={'wrap'}
        justifyContent={'space-around'}>
        {listAudio.map(audio => (
          <AlbumComponent album={audio} key={audio.audioId} />
        ))}
        {/* <AlbumComponent album={albumCategories[0].albums[0]} />
        <AlbumComponent album={albumCategories[0].albums[1]} />
        <AlbumComponent album={albumCategories[0].albums[2]} />
        <AlbumComponent album={albumCategories[0].albums[3]} /> */}
      </Box>
    </ScrollView>
  );
};

export default HomeScreen2;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    backgroundColor: '#fff',
    borderTopRightRadius: 42,
    borderTopLeftRadius: 42,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    marginTop: 80,
  },
});
