import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import TextField from '../../../ui/atoms/form/TextField';

const validateEmail = (email: string) => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const FormScreen = () => {
  const [textFieldValue, setTextFieldValue] = useState<string>();
  const [textFieldError, setTextFieldError] = useState<string>();

  const onChangeTextFieldValue = (newValue: string) => {
    setTextFieldValue(newValue);
    if (validateEmail(newValue)) {
      setTextFieldError('');
    } else {
      setTextFieldError('Invalid email entered');
    }
  };

  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <TextField value={textFieldValue} onChangeText={onChangeTextFieldValue} placeholder='Your email' error={textFieldError} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginLeft: 15,
    marginRight: 15,
  },
});

export default FormScreen;
