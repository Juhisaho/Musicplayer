import React from 'react';
import {
  View,
  StyleSheet,
  Modal,
  StatusBar,
  Text,
  TouchableWithoutFeedback,
} from 'react-native';
import styles from '../misc/styles';

const OptionModal = ({
  visible,
  currentItem,
  onClose,
  options,
  onPlayPress,
}) => {
  const { filename } = currentItem;
  return (
    <>
      <StatusBar hidden />
      <Modal animationType='slide' transparent visible={visible}>
        <View style={styles.modal}>
          <Text style={styles.titleMd} numberOfLines={2}>
            {filename}
          </Text>
          <View style={styles.optionContainer}>
            {options.map(optn => {
              return (
                <TouchableWithoutFeedback
                  key={optn.title}
                  onPress={optn.onPress}
                >
                  <Text style={styles.option}>{optn.title}</Text>
                </TouchableWithoutFeedback>
              );
            })}
          </View>
        </View>
        <TouchableWithoutFeedback onPress={onClose}>
          <View style={styles.modalBg} />
        </TouchableWithoutFeedback>
      </Modal>
    </>
  );
};


export default OptionModal;
