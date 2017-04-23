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

const Header = () => (
  <View style={styles.header}>
    <Text style={styles.title}>WhatsApp</Text>
    <Icon name="magnify" style={{ marginRight: 15 }} size={24} color="#fff" />
    <Icon name="dots-vertical" style={{ marginRight: 15 }} size={24} color="#fff" />
  </View>
);

const Tabs = () => (
  <View style={styles.tabsContainer}>
    <TouchableHighlight style={styles.tab}>
      <Text style={styles.offFocusTab}>CALLS</Text>
    </TouchableHighlight>
    <TouchableHighlight style={[styles.tab, {borderBottomWidth: 3, borderColor: '#fff'}]}>
      <Text style={styles.onFocusTab}>CHATS</Text>
    </TouchableHighlight>
    <TouchableHighlight style={styles.tab}>
      <Text style={styles.offFocusTab}>CONTACTS</Text>
    </TouchableHighlight>
  </View>
);

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedId: undefined,
      selectedTab: 'CHAT'
    };
    this._selectId = this._selectId.bind(this);
    this._selectTab = this._selectTab.bind(this);
  }

  componentWillMount() {
    this.setState({selectedId: undefined})
  }

  _selectId(selectedId) {
    this.setState({selectedId})
  }

  _selectTab(selectedTab) {
    this.setState({selectedTab})
  }

  render() {
    if (!isNaN(this.state.selectedId)) {
      return <Conversation selectId={this._selectId} selectedId={this.state.selectedId} />;
    }

    return (
      <View style={styles.container}>
        <View style={styles.topHeader} />
        <Header />
        <Tabs />
        <ScrollView bounces={false}>
          {conversations.map((conversation, i) => <ContactList key={i} selectId={this._selectId} {...conversation} />)}
          <InfoText />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  topHeader: {
    height: 20,
    backgroundColor: '#064d43'
  },
  header: {
    height: 60,
    backgroundColor: '#075e54',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center'
  },
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  title: {
    color: '#fff',
    marginLeft: 20,
    fontWeight: '700',
    fontSize: 16,
    flex:1,
    alignItems: 'flex-start'
  },
  tabsContainer: {
    height: 40,
    backgroundColor: '#075e54',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'stretch'
  },
  tab: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch'
  },
  onFocusTab: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 14
  },
  offFocusTab: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 14,
    opacity: 0.6
  },
});
