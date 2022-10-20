import { Text, View } from 'react-native';
import React from 'react';
import Input, { InputPropsType } from '../Input';
import { styles } from './styles';

type FlatInputType = InputPropsType & {
  label?: string,
}

export default function FlatInput({label, ...props}: FlatInputType) {
  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <Input style={[styles.input, props.style]} {...props} />
    </View>
  );
}