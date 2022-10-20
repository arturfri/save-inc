import { TextInput, TextInputProps } from 'react-native';
import React from 'react';
import { styles } from './styles';

export type InputPropsType = TextInputProps & {
  style?: object,
}

export default function Input({style, ...rest} : InputPropsType) {
  return <TextInput {...rest} style={[styles.input, style]} />;
}