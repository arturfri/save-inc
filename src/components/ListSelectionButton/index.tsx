import React from 'react';
import { TouchableOpacity, Text, TouchableOpacityProps } from 'react-native';
import { styles } from './styles';

type FloatingInputType = TouchableOpacityProps & {
  label: string,
  value: string,
}

export default function ListSelectionButton({ label, value, ...props }: FloatingInputType) {
  return(
    <TouchableOpacity activeOpacity={0.6} style={styles.container} {...props}>
      {label && <Text style={styles.label}>{label}</Text>}
      <Text style={styles.value}>{value}</Text>
    </TouchableOpacity>
  );
}