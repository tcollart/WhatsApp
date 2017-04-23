import React from 'react';

import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { Images } from './Images';

import { conversations } from '../mocks/conversation.js';

export const Conversation = ({selectedId, selectId}) => (
  <View style={{flex: 1}}>
    <View>
      <View style={{height: 20, backgroundColor: '#064d43'}} />
      <View style={{height: 50, backgroundColor: '#075e54', justifyContent: 'center', flexDirection: 'row', alignItems: 'center'}}>
        <Icon name="keyboard-backspace" style={{ marginLeft: 5 }} size={24} color="#fff" onPress={() => selectId(undefined)} />
        <Images imageId={selectedId} contentStyles={{image: { marginLeft: 5, width: 30, height: 30, borderRadius: 15 }}} />
        <View style={{ flex:1, alignItems: 'flex-start' }}>
          <Text style={{color: '#fff', marginLeft: 10, fontWeight: '700', fontSize: 16}}>{conversations[selectedId].name}</Text>
          <Text style={{color: '#fff', marginLeft: 10, fontWeight: '400', fontSize: 12}}>{conversations[selectedId].lastSeen}</Text>
        </View>
        <Icon name="magnify" style={{ marginRight: 15 }} size={24} color="#fff" />
        <Icon name="dots-vertical" style={{ marginRight: 15 }} size={24} color="#fff" />
      </View>
    </View>
    <View style={{flex: 1}}>
      <Image source={require('../mocks/images/background.jpg')} resizeMode="cover" style={{flex: 1, width: null}}>
        <ScrollView bounces={false} style={{flex: 1, backgroundColor: 'rgba(0, 0, 0, 0)'}} contentContainerStyle={{flex: 1, alignSelf: 'stretch', justifyContent: 'flex-end'}}>
          {conversations[selectedId].messages.map((message, i) => {
            const position = (message.from === 0) ? 'flex-end' : 'flex-start';
            const color = (message.from === 0) ? '#DCF8C6' : '#fff';
            return (
              <View key={i} style={{ flexDirection:'row', alignSelf: position, margin:5 }}>
                <View style={[styles.shadow, { width: 300, backgroundColor: color, padding: 10, borderRadius: 10 }]}>
                  <Text>{message.message}</Text>
                  <View style={{justifyContent: 'flex-end', alignSelf: 'flex-end', alignItems: 'flex-end', flexDirection: 'row'}}>
                    <Text style={{ fontSize: 11, color: '#999999'}}>{message.date}</Text>
                    {message.info && message.info === 'READ' ?
                    <Icon style={{ marginRight: 10 }} size={16} name="check-all" color="#7dd5df" /> : <Text />
                    }
                  </View>
                </View>
              </View>
            );
          })}
        </ScrollView>
        <View style={{alignSelf: 'flex-start', height: 50, flexDirection: 'row', borderRadius: 18}}>
          <View style={[styles.shadow, styles.textInput,{flexDirection: 'row'}]}>
            <Icon name="emoticon" size={24} color="#999" style={{ alignSelf: 'flex-start', margin: 6 }} />
            <TextInput style={{ flex: 1 }} />
            <Icon name="camera" size={23} color="#bbb" style={{ alignSelf: 'flex-end', margin: 6 }} />
          </View>
          <View style={{ width: 36, height: 36, backgroundColor: '#297f76', borderRadius: 18, alignItems: 'center', justifyContent: 'center', alignSelf: 'center', marginRight: 10}}>
            <Icon name="microphone" size={18} color="#fff" />
          </View>
        </View>
      </Image>
    </View>
  </View>
);

const styles = StyleSheet.create({
  textInput: {
    height: 36,
    width: 300,
    borderRadius: 5,
    margin: 5,
    backgroundColor: '#fff',
  },
  shadow: {
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowRadius: 1,
    shadowOpacity: .3
  }
});
