import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const { width } = Dimensions.get('window');

export const BottomInput = () => (
  <View style={styles.textInputContainer}>
    <View style={[styles.shadow, styles.textInput]}>
      <Icon name="emoticon" size={24} color="#999" style={styles.emoticonIcon} />
      <TextInput style={{ flex: 1 }} />
      <Icon name="camera" size={24} color="#bbb" style={styles.cameraIcon} />
    </View>
    <View style={styles.microphoneContainer}>
      <Icon name="microphone" size={18} color="#fff" />
    </View>
  </View>
);

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowRadius: 1,
    shadowOpacity: .3
  },
  textInputContainer: {
    flexDirection: 'row',
    width: width,
    borderRadius: 5,
    margin: 5,
  },
  textInput: {
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'flex-start',
    height: 36,
    flexDirection: 'row',
    borderRadius: 10
  },
  emoticonIcon: {
    alignSelf: 'flex-start',
    margin: 6
  },
  cameraIcon: {
    alignSelf: 'flex-end',
    marginRight: 6,
    marginBottom: 3
  },
  microphoneContainer: {
    width: 36,
    height: 36,
    backgroundColor: '#297f76',
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginRight: 14,
    marginLeft: 7
  }
});
