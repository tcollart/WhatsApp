import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  ScrollView
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { ContactList, InfoText } from '../components/ContactList';
import { Conversation } from '../components/Conversation';

import { conversations } from '../mocks/conversation.js';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedId: undefined,
    };
    this._selectId = this._selectId.bind(this);
  }

  componentWillMount() {
    this.setState({selectedId: undefined})
  }

  _selectId(selectedId) {
    this.setState({selectedId})
  }

  render() {
    if (!isNaN(this.state.selectedId)) {
      return <Conversation selectId={this._selectId} selectedId={this.state.selectedId} />;
    }
    return (
      <View style={styles.container}>
        <View style={{height: 20, backgroundColor: '#064d43'}} />
        <View style={{height: 60, backgroundColor: '#075e54', justifyContent: 'center', flexDirection: 'row', alignItems: 'center'}}>
          <Text style={{color: '#fff', marginLeft: 20, fontWeight: '700', fontSize: 16, flex:1, alignItems: 'flex-start'}}>WhatsApp</Text>
          <Icon name="magnify" style={{ marginRight: 15 }} size={24} color="#fff" />
          <Icon name="dots-vertical" style={{ marginRight: 15 }} size={24} color="#fff" />
        </View>
        <View style={{height: 40, backgroundColor: '#075e54', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'stretch'}}>
          <TouchableHighlight style={{flex:1, justifyContent: 'center', alignItems: 'center', alignSelf: 'stretch'}}>
            <Text style={{color: '#fff', fontWeight: '600', fontSize: 14, opacity: 0.6}}>&nbsp;&nbsp;&nbsp;CALLS</Text>
          </TouchableHighlight>
          <TouchableHighlight style={{flex:1, justifyContent: 'center', alignItems: 'center', alignSelf: 'stretch', borderBottomWidth: 3, borderColor: '#fff'}}>
            <Text style={{color: '#fff', fontWeight: '600', fontSize: 14}}>CHATS</Text>
          </TouchableHighlight>
          <TouchableHighlight style={{flex:1, justifyContent: 'center', alignItems: 'center', alignSelf: 'stretch'}}>
            <Text style={{color: '#fff', fontWeight: '600', fontSize: 14, opacity: 0.6}}>CONTACTS</Text>
          </TouchableHighlight>
        </View>
        <ScrollView bounces={false}>
          {conversations.map((conversation, i) => <ContactList key={i} selectId={this._selectId} {...conversation} />)}
          <InfoText />
        </ScrollView>
      </View>
    );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
});
