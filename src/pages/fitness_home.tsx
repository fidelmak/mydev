import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';

import {
  s,
  vs,
  moderateScale,
} from 'react-native-size-matters';

import GymImage from '../../assets/Gym.jpg';

import AppBar from '../components/appbar';
import ContentOne from '../components/ContentOne';
import Pills from '../components/pills';
import HashTags from '../components/hashtag';
import Activity from '../components/activity';

import EvilIcons from '@expo/vector-icons/EvilIcons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

const FitnessHome = () => {
  return (
    <ImageBackground
      source={GymImage}
      style={styles.image}
      resizeMode="cover"
    >
      {/* Background Overlay */}
      <View style={styles.overlay} />

      {/* Main Content */}
      <View style={styles.container}>

        {/* App Bar */}
        <AppBar />

        {/* Main Content */}
        <ContentOne />

        {/* Statistics */}
        <View style={styles.pillsRow}>
          <Pills
            icon={
              <EvilIcons
                name="star"
                size={s(24)}
                color="white"
              />
            }
            text="74"
          />

          <Pills
            icon={
              <MaterialCommunityIcons
                name="clock-check-outline"
                size={s(24)}
                color="white"
              />
            }
            text="8 hours"
          />
        </View>

        {/* Hashtags */}
        <View style={styles.hashTagsRow}>
          <HashTags text="Fitness" />
          <HashTags text="Health" />
          <HashTags text="Lifestyle" />
        </View>

        {/* Activities */}
        <Activity
          icon={
            <Ionicons
              name="notifications-outline"
              size={s(24)}
              color="white"
            />
          }
          text="Morning Activities"
        />

        <View style={styles.activitySpacing} />

        <Activity
          icon={
            <FontAwesome5
              name="calendar-alt"
              size={s(24)}
              color="white"
            />
          }
          text="4 successful days"
        />

        {/* Start Button */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.startButton}
          >
            <Text style={styles.startText}>
              Start
            </Text>
          </TouchableOpacity>
        </View>

      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: '100%',
    backgroundColor: 'black',
  },

  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },

  container: {
    flex: 1,
    width: '100%',
    paddingHorizontal: s(20),
  },

  pillsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: s(10),
    paddingVertical: vs(10),
  },

  hashTagsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: s(10),
    paddingVertical: vs(10),
  },

  activitySpacing: {
    height: vs(14),
  },

  buttonContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: vs(25),
  },

  startButton: {
    width: '100%',
    height: vs(50),
    borderRadius: s(24),
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },

  startText: {
    color: 'black',
    fontSize: moderateScale(20),
    fontWeight: '700',
  },
});

export default FitnessHome; 