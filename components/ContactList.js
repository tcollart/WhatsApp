import React from 'react';
import {
  Image,
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Images } from './Images';

const { width, height } = Dimensions.get('window');

export const InfoText = () => <Text style={styles.infoText}>Tap and hold on a chat for more options</Text>;

export const Separator = () => <View style={{ height: 1, width: width * 75 / 100, backgroundColor: '#eee', alignSelf: 'flex-end', marginRight: 20 }} />;

export const ContactList = (props) => (
  <View style={{flex: 1, flexDirection: 'column'}}>
    <TouchableOpacity style={styles.container} onPress={() => props.selectId(props.id)}>
      <Images imageId={props.id} />
      <View style={styles.text}>
        <View style={styles.nameAndDate}>
          <Text style={styles.name}>{props.name}</Text>
          <Text style={styles.date}>{props.messages[props.messages.length - 1].date}</Text>
        </View>
        <View style={styles.messageContainer}>
          {props.messages[props.messages.length - 1].from === 0 && 
          <Icon style={{ marginRight: 5 }} size={16}
            name={props.messages[props.messages.length - 1].info === 'SENT' ? "check" : "check-all"}
            color={props.messages[props.messages.length - 1].info === 'READ' ? "#7dd5df" : "#424242"}
          />}
          <Text numberOfLines={1} ellipsizeMode='tail' style={styles.message}>{props.messages[props.messages.length - 1].message}</Text>
        </View>
      </View>
    </TouchableOpacity>
    <Separator />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
  },
  text: {
    margin: 5,
    flex: 1,
  },
  nameAndDate: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  name: {
    fontWeight: '600',
    fontSize: 15,
  },
  date: {
    color: '#424242',
    fontSize: 12,
    fontWeight: '400',
    marginRight: 10
  },
  messageContainer: {
    flex: 1,
    flexDirection: 'row'
  },
  message: {
    color: '#424242',
    fontSize: 14,
  },
  done: {
    width: 10,
  },
  infoText: {
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 10,
    color: '#424242',
    marginTop: 20,
    marginBottom: 80,
  }
});
