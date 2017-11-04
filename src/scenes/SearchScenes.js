import React, { Component } from 'react';
import { View, Text, Navigator, StyleSheet } from 'react-native';

export default class SearchScenes extends Component {
  static get defaultProps() {
    return {
      title: 'MyScene'
    };
  }

  render() {
      return (
          <View style={styles.container}>
              <Text style={styles.description}>Search for houses to buy!</Text>
          </View>
      );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    description: {
        fontSize: 18,
        textAlign: 'center',
        color: '#656565',
        marginTop: 65
    }
});
