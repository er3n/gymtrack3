import React from 'react';
import { StyleSheet, Text, TextStyle } from 'react-native';
import Typography from './Typography';

const SubHeading: React.FC<{
  type: 'sm' | 'md' | 'lg' | 'xl';
}> = ({ type, children }) => {
  return <Text style={[styles.common, styles[type]]}>{children}</Text>;
};

const styles = StyleSheet.create({
  common: {
    fontFamily: Typography.font.black,
    color: Typography.color.white1,
    fontWeight: '400',
  } as TextStyle,
  sm: {
    fontSize: 20,
    lineHeight: 24,
  } as TextStyle,
  md: {
    fontSize: 22,
    lineHeight: 26,
  } as TextStyle,
  lg: {
    fontSize: 25,
    lineHeight: 30,
  } as TextStyle,
  xl: {
    fontSize: 28,
    lineHeight: 34,
  } as TextStyle,
});

export default SubHeading;
