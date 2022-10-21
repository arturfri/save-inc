import { Modal, View, TouchableWithoutFeedback } from 'react-native';
import React, {ReactElement} from 'react';
import { styles } from './styles';

type BaseModelType = {
  children: ReactElement,
  visible: boolean,
  closeModal: () => void,
  verticalAlignment?: 'flex-end' | 'center' | 'flex-start' | 'space-between' | 'space-around' | 'space-evenly' | undefined,
}

export default function BaseModal({ children, visible, verticalAlignment = 'flex-end', closeModal }: BaseModelType) {
  return (
    <Modal visible={visible} transparent={true}  >
      <TouchableWithoutFeedback onPress={closeModal} style={{flex: 1}}>
        <View style={[styles.container,{ justifyContent: verticalAlignment }]}>
          {children}
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}