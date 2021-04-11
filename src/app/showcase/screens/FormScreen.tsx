import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import Button from '../../../ui/atoms/form/Button';
import TextField from '../../../ui/atoms/form/TextField';
import Box from '../../../ui/atoms/grid/Box';
import Heading from '../../../ui/atoms/typography/Heading';
import SubHeading from '../../../ui/atoms/typography/SubHeading';

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

  const onPressButton = () => {
    console.log('clicked button');
  };

  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <View style={styles.formElements}>
          <Box>
            <Heading type='lg'>Gymtrack</Heading>
            <SubHeading type='sm'>Sign for tracking your gym.</SubHeading>
          </Box>
          <Box>
            <TextField value={textFieldValue} onChangeText={onChangeTextFieldValue} placeholder='Your email' error={textFieldError} />
          </Box>
          <Box>
            <Button onPress={onPressButton}>signin</Button>
          </Box>
        </View>
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
  formElements: {
    justifyContent: 'space-evenly',
  },
});

export default FormScreen;
