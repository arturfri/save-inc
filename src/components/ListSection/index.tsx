import { View, Text } from 'react-native';
import React from 'react';
import { styles } from './styles';

type PropsType = {
  sectionName: string,
  detail?: string,
}

export default function ListSection({ sectionName, detail }: PropsType) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{sectionName}</Text>
      {detail && <Text style={styles.title}>{detail}</Text>}
    </View>
  );
}