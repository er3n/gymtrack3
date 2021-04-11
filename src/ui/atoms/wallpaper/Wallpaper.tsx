import React from 'react';
import { Image, ImageSourcePropType, ImageStyle, StyleSheet } from 'react-native';

const Wallpaper: React.FC<{
  backgroundImage: ImageSourcePropType;
}> = ({ backgroundImage }) => {
  return <Image source={backgroundImage} style={styles.stretch} />;
};

const styles = StyleSheet.create({
  stretch: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    resizeMode: 'stretch',
    width: undefined,
    height: undefined,
  } as ImageStyle,
});

export default Wallpaper;
