import React from 'react';
import { StyleSheet, View } from 'react-native';

export interface BoxProps {}

const Box: React.FC<BoxProps> = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    marginTop: 6,
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 6,
  },
});

export default Box;
