import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

// import Windmill from './src/components/Windmill';
// import Tire from './src/components/Tire';
import Car from './src/components/Car';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
				<Car />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#94BBA9',
  },
});