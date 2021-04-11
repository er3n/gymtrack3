import React from 'react';
import { GestureResponderEvent, Pressable, StyleSheet, View } from 'react-native';
import Uppercase from '../typography/Uppercase';

export interface ButtonProps {
  onPress?: null | ((event: GestureResponderEvent) => void);
}

const Button: React.FC<ButtonProps> = ({ onPress, children }) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        {
          opacity: pressed ? 0.6 : 1,
        },
        styles.container,
      ]}>
      <View style={styles.textArea}>
        <Uppercase type='lg'>{children}</Uppercase>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    borderRadius: 20,
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: '#4C5FEF',
  },
  textArea: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Button;
