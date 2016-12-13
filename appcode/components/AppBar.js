import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Button
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

class AppBar extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>

        <Text style={styles.title}>
            <Icon name="space-shuttle" style={{fontSize: 20}} /> {this.props.appTitle}
        </Text>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
    flexWrap: 'nowrap',
    flexDirection: 'row',
    backgroundColor: '#333',
    height: 50,
  },
  buttocks: {
    textAlign: 'center',
    width: 100,
    height: 25,
    right: 15,
    top: 12,
    paddingTop: 2,
    paddingBottom: 2,
    backgroundColor: '#ededed',
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#ccc'
  },
  popup: {
    position: 'absolute',
    top: 80,
    right: 80,
    height: 100,
    width: 150
  },
  title: {
    flex: 1,
    padding: 10,
    textAlign: 'left',
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  },
  button: {
    flex: 0,
    paddingTop: 10,
    paddingLeft: 10
  },
  button2: {
    flex: 0,
    width: 30,
    paddingTop: 10,
    paddingRight: 10
  },
});

module.exports = AppBar
