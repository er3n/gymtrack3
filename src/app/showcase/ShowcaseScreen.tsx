import React from 'react';
import { SafeAreaView, StyleSheet, ViewStyle } from 'react-native';
import TypographyScreen from './TypographyScreen';

const ShowCaseScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <TypographyScreen />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#121217',
  } as ViewStyle,
});

export default ShowCaseScreen;
