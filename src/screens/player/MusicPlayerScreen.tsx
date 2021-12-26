import Slider from '@react-native-community/slider';
import {Box, Image, Text} from 'native-base';
import React, {useEffect, useState} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import TrackPlayer, {
  usePlaybackState,
  State,
  useProgress,
} from 'react-native-track-player';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {songs} from '../../utils/mock-data';

const setupPlayer = async () => {
  await TrackPlayer.setupPlayer({}).then(async () => {});

  await TrackPlayer.add(songs);
};

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

const MusicPlayerScreen = () => {
  const playbackState = usePlaybackState();
  const [songIndex] = useState(0);
  const progress = useProgress();

  useEffect(() => {
    setupPlayer();
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <Box style={styles.mainContainer}>
        <Box style={styles.artworkWrapper}>
          <Image
            source={{uri: songs[0].artwork}}
            alt="music-img"
            style={styles.artworkImg}
          />
        </Box>
        <Box>
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
                <Ionicons name="ios-pause-circle" size={42} color="#ffd369" />
              ) : (
                <Ionicons name="ios-play-circle" size={42} color="#ffd369" />
              )}
            </TouchableOpacity>
          </Box>
          <Box>
            <Text style={styles.title}>{songs[songIndex].title}</Text>
            <Text style={styles.artist}>{songs[songIndex].artist}</Text>
            <Text style={styles.description}>Song description</Text>
          </Box>
        </Box>
      </Box>
    </SafeAreaView>
  );
};

export default MusicPlayerScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#eee',
  },
  artist: {
    fontSize: 16,
    fontWeight: '200',
    color: '#eee',
  },
  description: {
    fontSize: 16,
    fontWeight: '200',
    color: '#eee',
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
