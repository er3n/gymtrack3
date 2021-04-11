import React from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
import Label from '../typography/Label';

interface TextFieldProps {}

const TextField: React.FC<TextFieldProps> = () => {
  return (
    <View style={styles.container}>
      <View style={styles.innerBox}>
        <Label type='2'>erenozturk@gmail.com</Label>
        <View style={styles.messageBox}>
          <Label type='4'>Enter email</Label>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: 'rgba(255, 255, 255, 0.03)',
    borderRadius: 8,
  } as ViewStyle,
  innerBox: {
    marginTop: 12,
    marginBottom: 12,
    marginLeft: 24,
    marginRight: 24,
  } as ViewStyle,
  messageBox: {
    marginTop: 2,
  },
});

export default TextField;
