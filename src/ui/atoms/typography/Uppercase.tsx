import React from 'react';
import { StyleSheet, Text, TextStyle } from 'react-native';
import Typography from './Typography';

const Uppercase: React.FC<{
  type: 'sm' | 'md' | 'lg' | 'xl';
}> = ({ type, children }) => {
  return <Text style={[styles.common, styles[type]]}>{children}</Text>;
};

const styles = StyleSheet.create({
  common: {
    fontFamily: Typography.font.black,
    color: Typography.color.white1,
    textTransform: 'uppercase',
    fontWeight: '500',
  } as TextStyle,
  sm: {
    fontSize: 16,
    lineHeight: 19,
    letterSpacing: 2.5,
  } as TextStyle,
  md: {
    fontSize: 18,
    lineHeight: 21,
    letterSpacing: 3,
  } as TextStyle,
  lg: {
    fontSize: 22,
    lineHeight: 26,
    letterSpacing: 2,
  } as TextStyle,
  xl: {
    fontSize: 20,
    lineHeight: 26,
    letterSpacing: 2.8,
  } as TextStyle,
});

export default Uppercase;
