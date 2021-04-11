import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import TextField from '../../../ui/atoms/form/TextField';

const FormScreen = () => {
  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <TextField />
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
