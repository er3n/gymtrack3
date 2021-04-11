import React from 'react';
import { StyleSheet, TextInput, TextStyle, View, ViewStyle } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Colors from '../Colors';
import Label from '../typography/Label';

interface TextFieldProps {
  value?: string;
  onChangeText: (text: string) => void;
  error?: string;
  placeholder: string;
}

const TextField: React.FC<TextFieldProps> = ({ value, onChangeText, placeholder, error }) => {
  return (
    <View style={styles.container}>
      <View style={styles.innerBox}>
        <View style={styles.leftSide}>
          <TextInput
            style={styles.textInput}
            autoCapitalize='none'
            value={value}
            onChangeText={onChangeText}
            placeholder={placeholder}
            placeholderTextColor={Colors.dark04}
          />
          {!!error && (
            <View style={styles.messageBox}>
              <Label type='4'>Invalid email</Label>
            </View>
          )}
        </View>
        <View style={styles.rightSide}>
          {!!error ? (
            <Icon name='x-square' color={Colors.grey01} size={30} style={styles.iconStyle}></Icon>
          ) : (
            <Icon name='check-square' color={Colors.grey01} size={30} style={styles.iconStyle}></Icon>
          )}
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
    height: 60,
    justifyContent: 'center',
  } as ViewStyle,
  innerBox: {
    marginLeft: 24,
    marginRight: 24,
    flexDirection: 'row',
  } as ViewStyle,
  messageBox: {
    marginTop: 2,
  },
  leftSide: {
    flex: 1,
    justifyContent: 'center',
  },
  rightSide: {
    justifyContent: 'center',
  },
  textInput: {
    width: '100%',
    color: Colors.white01,
    fontSize: 16,
  } as TextStyle,
  iconStyle: {
    opacity: 0.2,
  } as TextStyle,
});

export default TextField;
