import React from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
import Colors from '../../ui/atoms/Colors';
import FormScreen from './screens/FormScreen';

const ShowCaseScreen = () => {
  return (
    <View style={styles.container}>
      <FormScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.dark01,
    height: '100%',
  } as ViewStyle,
});

export default ShowCaseScreen;
