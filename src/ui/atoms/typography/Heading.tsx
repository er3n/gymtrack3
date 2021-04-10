import React from 'react';
import { StyleSheet, Text, TextStyle } from 'react-native';
import Typography from './Typography';

const Heading: React.FC<{
  type: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}> = ({ type, children }) => {
  return <Text style={[styles.common, styles[type]]}>{children}</Text>;
};

const styles = StyleSheet.create({
  common: {
    fontFamily: Typography.font.black,
    color: Typography.color.white1,
    fontWeight: '600',
  } as TextStyle,
  xs: {
    fontSize: 25,
    lineHeight: 30,
  } as TextStyle,
  sm: {
    fontSize: 30,
    lineHeight: 40,
  } as TextStyle,
  md: {
    fontSize: 32,
    lineHeight: 40,
  } as TextStyle,
  lg: {
    fontSize: 40,
    lineHeight: 48,
  } as TextStyle,
  xl: {
    fontSize: 48,
    lineHeight: 53,
  } as TextStyle,
});

export default Heading;
