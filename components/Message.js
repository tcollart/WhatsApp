import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


export const Message = ({message}) => {
  const position = (message.from === 0) ? 'flex-end' : 'flex-start';
  const color = (message.from === 0) ? '#DCF8C6' : '#fff';
  const infoIcon = (message.info === 'SENT') ? 'check' : 'check-all';
  const infoColor = (message.info === 'READ') ? '#7dd5df' : '#424242';

  return (
    <View style={[styles.container, {alignSelf: position}]}>
      <View style={[styles.shadow, styles.messageContainer, { backgroundColor: color }]}>
        <Text>{message.message}</Text>
        <View style={styles.dateAndInfo}>
          <Text style={styles.date}>{message.date}</Text>
          {message.info && <Icon style={styles.icon} size={16} name={infoIcon} color={infoColor} />}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  messageContainer: {
    width: 300,
    padding: 10,
    borderRadius: 10
  },
  dateAndInfo: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignSelf: 'flex-end',
    alignItems: 'flex-end',
  },
  container: {
    flexDirection:'row',
    margin: 5
  },
  date: {
    fontSize: 11,
    color: '#999999',
    margin: 3
  },
  icon: {
    marginRight: 10
  },
  shadow: {
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowRadius: 1,
    shadowOpacity: .3
  },
});
