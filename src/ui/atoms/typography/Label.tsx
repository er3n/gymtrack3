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
    fontSize: 28,
    lineHeight: 28,
  } as TextStyle,
  2: {
    fontSize: 25,
    lineHeight: 20,
  } as TextStyle,
  3: {
    fontSize: 22,
    lineHeight: 22,
  } as TextStyle,
  4: {
    fontSize: 20,
    lineHeight: 20,
  } as TextStyle,
  5: {
    fontSize: 18,
    lineHeight: 18,
  } as TextStyle,
  6: {
    fontSize: 16,
    lineHeight: 16,
  } as TextStyle,
  7: {
    fontSize: 22,
    lineHeight: 22,
    letterSpacing: 2.44,
  } as TextStyle,
  8: {
    fontSize: 18,
    lineHeight: 18,
    letterSpacing: 2,
  } as TextStyle,
});

export default Label;
