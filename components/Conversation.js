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

import { BottomInput } from './BottomInput';
import { Header } from './Header';
import { Message } from './Message';

import { conversations } from '../mocks/conversation.js';


export const Conversation = ({selectedId, selectId}) => (
  <View style={{flex: 1}}>
    <Header selectedId={selectedId} selectId={selectId} conversations={conversations} />
    <View style={{flex: 1}}>
      <Image source={require('../mocks/images/background.jpg')} resizeMode="cover" style={{flex: 1, width: null}}>
        <ScrollView bounces={false} style={styles.scrollContainer} contentContainerStyle={styles.scrollContent}>
          {conversations[selectedId].messages.map((message, i) => <Message message={message} key={i} />)}
        </ScrollView>
        <BottomInput />
      </Image>
    </View>
  </View>
);

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0)'
  },
  scrollContent: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'flex-end'
  }
});
