import React from 'react';
import { StyleSheet, Text, TextStyle } from 'react-native';
import Typography from './Typography';

const Label: React.FC<{
  type: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8';
}> = ({ type, children }) => {
  return <Text style={[styles.common, styles[type]]}>{children}</Text>;
};

const styles = StyleSheet.create({
  common: {
    fontFamily: Typography.font.black,
    color: Typography.color.white1,
    fontWeight: '500',
  } as TextStyle,
  1: {
    fontSize: 20,
    lineHeight: 20,
  } as TextStyle,
  2: {
    fontSize: 16,
    lineHeight: 16,
  } as TextStyle,
  3: {
    fontSize: 16,
    lineHeight: 16,
  } as TextStyle,
  4: {
    fontSize: 15,
    lineHeight: 15,
    opacity: 0.2,
  } as TextStyle,
  5: {
    fontSize: 13,
    lineHeight: 13,
  } as TextStyle,
  6: {
    fontSize: 12,
    lineHeight: 12,
  } as TextStyle,
  7: {
    fontSize: 16,
    lineHeight: 16,
    letterSpacing: 2.44,
  } as TextStyle,
  8: {
    fontSize: 14,
    lineHeight: 14,
    letterSpacing: 2,
  } as TextStyle,
});

export default Label;
