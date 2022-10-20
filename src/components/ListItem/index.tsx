import { View, Text } from 'react-native';
import React from 'react';
import { styles } from './styles';
import moment from 'moment';

type PropsType = {
  title: string,
  value?: number,
  description?: string,
}

export default function ListItem({ title, value, description }: PropsType) {
  return (
    <View style={styles.contianer}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
        {value && <Text style={[styles.detail, {color: value >= 0 ? 'green': 'red'}]}>{value}</Text>}
      </View>
      <Text style={styles.description} numberOfLines={1} ellipsizeMode='clip'>{moment().format('DD/MM HH:mm')} {description}</Text>
    </View>
  );
}