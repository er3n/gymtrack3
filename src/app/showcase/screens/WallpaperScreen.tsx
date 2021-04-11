import React from 'react';
import { SafeAreaView, View } from 'react-native';
import Uppercase from '../../../ui/atoms/typography/Uppercase';
import Wallpaper from '../../../ui/atoms/wallpaper/Wallpaper';

const bgBlur = require('./bg-blur.png');

const WallpaperScreen = () => {
  return (
    <View style={{ height: '100%' }}>
      <Wallpaper backgroundImage={bgBlur} />
      <SafeAreaView>
        <Uppercase type='xl'>Gymtrack</Uppercase>
      </SafeAreaView>
    </View>
  );
};

export default WallpaperScreen;
