import React from 'react';
import { View } from 'react-native';
import styles from '../misc/styles';

const Screen = ({ children }) => {
  return <View style={styles.containerStyle}>{children}</View>;
};

export default Screen;
