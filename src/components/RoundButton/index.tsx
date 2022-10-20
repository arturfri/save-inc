import { View, Text } from 'react-native';
import React from 'react';
import { styles } from './styles';

type PropsType = {
  text: string
}

export default function RoundButton({ text }: PropsType) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}