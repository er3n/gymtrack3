import React from 'react';
import { StyleSheet, Text, TextStyle } from 'react-native';
import Typography from './Typography';

const Hero: React.FC<{
  type: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}> = ({ type, children }) => {
  return <Text style={[styles.common, styles[type]]}>{children}</Text>;
};

const styles = StyleSheet.create({
  common: {
    fontFamily: Typography.font.black,
    color: Typography.color.white1,
    fontWeight: '700',
  } as TextStyle,
  xs: {
    fontSize: 30,
    lineHeight: 70,
  } as TextStyle,
  sm: {
    fontSize: 50,
    lineHeight: 70,
  } as TextStyle,
  md: {
    fontSize: 60,
    lineHeight: 70,
  } as TextStyle,
  lg: {
    fontSize: 70,
    lineHeight: 85,
  } as TextStyle,
  xl: {
    fontSize: 80,
    lineHeight: 90,
  } as TextStyle,
});

export default Hero;
