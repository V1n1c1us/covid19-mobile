import React from 'react';
import {View} from 'react-native';
import Lottie from 'lottie-react-native';

import animationData from './lf30_editor_zPjRyC.json';

const Loading = () => {

  return (
    <View style={{ marginTop: 50, justifyContent: "center", alignItems: 'center'}}>
     <Lottie source={animationData}  autoSize resizeMode="contain" autoPlay loop />
    </View>
  );
}

export default Loading;