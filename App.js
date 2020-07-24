import React from 'react';
import {View, Text, StyleSheet, Animated} from 'react-native';

export default function App() {
  const position = new Animated.ValueXY({x: 0, y: 0});
  Animated.timing(position, {
    toValue: {x: 200, y: 500},
  }).start();
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          height: 80,
          width: 80,
          margin: 10,
          backgroundColor: 'blue',
          alignItems: 'center',
          justifyContent: 'center',
          transform: [{translateX: position.x}],
        }}>
        <Text style={{color: 'white'}}>Animate</Text>
      </View>
    </View>
  );
}
