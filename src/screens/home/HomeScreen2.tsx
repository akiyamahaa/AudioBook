import {Box, ScrollView, Text} from 'native-base';
import React from 'react';
import {StyleSheet} from 'react-native';
import AlbumComponent from '../../components/Album';
// import {collection, getDocs} from 'firebase/firestore/lite';
// import {db, IAudioInfo} from '../../utils/firebase';
import {songs} from '../../utils/mock-data';

const HomeScreen2 = () => {
  // const [listAudio, setListAudio] = useState<IAudioInfo[]>([]);

  // // const getData = async () => {
  // //   const resultCol = collection(db, 'audio-info');
  // //   const resultSnapshot = await getDocs(resultCol);
  // //   const resultList = resultSnapshot.docs.map((doc: any) => doc.data());
  // //   setListAudio(resultList);
  // // };

  // useEffect(() => {
  //   getData();
  // }, []);

  return (
    <Box style={styles.root}>
      <Box style={styles.titleContainer}>
        <Text color="#fff" fontSize={32}>
          My Audio Book
        </Text>
      </Box>
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
