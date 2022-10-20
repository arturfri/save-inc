import React from 'react';
import { View, Text } from 'react-native';
import Input, { InputPropsType } from '../Input';
import { styles } from './styles';

type FloatingInputType = InputPropsType & {
  label?: string,
}

export default function FloatingInput({label, ...props}: FloatingInputType) {
  return(
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <Input style={props.style} {...props} />
    </View>
  );
}