import Slider from '@react-native-community/slider';
import {useNavigation, useRoute} from '@react-navigation/native';
import {Box, Image, ScrollView, Text} from 'native-base';
import React, {useEffect} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import EntypoIcons from 'react-native-vector-icons/Entypo';
import TrackPlayer, {
  usePlaybackState,
  State,
  useProgress,
  Capability,
} from 'react-native-track-player';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {RootStackProps} from '../../navigation/Root';
import {songs} from '../../utils/mock-data';

const togglePlayBack = async (playbackState: any) => {
  const currentTrack = await TrackPlayer.getCurrentTrack();

  if (currentTrack !== null) {
    if (playbackState === State.Paused) {
      await TrackPlayer.play();
    } else {
      await TrackPlayer.pause();
    }
  }
};

const setupPlayer = async (idx: number) => {
  await TrackPlayer.setupPlayer({}).then(async () => {});
  await TrackPlayer.updateOptions({
    capabilities: [Capability.Play, Capability.Pause, Capability.Stop],
  });
  await TrackPlayer.add(songs[idx]);
};

const MusicPlayerScreen = () => {
  const navigation = useNavigation<RootStackProps['navigation']>();
  const route = useRoute();
  const param: any = route.params;
  const {audioId} = param;
  const playbackState = usePlaybackState();

  const progress = useProgress();

  useEffect(() => {
    setupPlayer(audioId);
  }, [audioId]);

  return (
    <ScrollView
      style={styles.container}
      // eslint-disable-next-line react-native/no-inline-styles
      contentContainerStyle={{
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.backBtn}>
        <EntypoIcons name="back" size={40} color="#ffd369" />
      </TouchableOpacity>
      <Box style={styles.mainContainer}>
        <Box style={styles.artworkWrapper}>
          <Image
            source={{uri: songs[audioId].artwork}}
            alt="music-img"
            style={styles.artworkImg}
          />
        </Box>
        <Box>
          <Text style={styles.title}>{songs[audioId].title}</Text>
        </Box>
        <Box alignItems={'center'}>
          <Slider
            style={styles.progressContainer}
            value={progress.position}
            minimumValue={0}
            maximumValue={progress.duration}
            onSlidingComplete={async value => {
              await TrackPlayer.seekTo(value);
            }}
            thumbTintColor="#ffd369"
            minimumTrackTintColor="#ffd369"
            maximumTrackTintColor="#ffd369"
          />
          <Box style={styles.progressLabelContainer}>
            <Text style={styles.progressLabelTxt}>
              {new Date(progress.position * 1000)
                .toISOString()
                .substring(14, 19)}
            </Text>
            <Text style={styles.progressLabelTxt}>
              {new Date((progress.duration - progress.position) * 1000)
                .toISOString()
                .substring(14, 19)}
            </Text>
          </Box>
          <Box style={styles.musicControll}>
            <TouchableOpacity onPress={() => togglePlayBack(playbackState)}>
              {playbackState === State.Playing ? (
                <Ionicons name="ios-pause-circle" size={80} color="#ffd369" />
              ) : (
                <Ionicons name="ios-play-circle" size={80} color="#ffd369" />
              )}
            </TouchableOpacity>
          </Box>
          <Box style={styles.descriptonContainer}>
            <Text style={styles.artist}>{songs[audioId].description}</Text>
          </Box>
        </Box>
      </Box>
    </ScrollView>
  );
};

export default MusicPlayerScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backBtn: {
    padding: 20,
  },
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  artworkWrapper: {
    width: 300,
    height: 340,
    marginBottom: 24,
    shadowColor: '#fff',
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
    elevation: 5,
  },
  artworkImg: {
    width: '100%',
    height: '100%',
    borderRadius: 15,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
    color: '#eee',
  },
  artist: {
    fontSize: 17,
    fontWeight: '400',
    color: '#eee',
  },
  descriptonContainer: {
    paddingHorizontal: 40,
    paddingVertical: 12,
  },
  progressContainer: {
    width: 350,
    height: 40,
    marginTop: 25,
    flexDirection: 'row',
  },
  progressLabelContainer: {
    width: 340,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  progressLabelTxt: {
    color: '#fff',
  },
  musicControll: {
    alignItems: 'center',
  },
});
