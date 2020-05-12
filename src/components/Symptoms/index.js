import React from 'react';
import {View, Image} from 'react-native'

import cough from '../../../assets/cough.png';
import fever from '../../../assets/fever.png';
import tiredness from '../../../assets/tiredness.png';

import { TextSymptoms } from './styles';

export default function Symptoms() {

  return (
    <>
      <View>
        <Image source={cough} style={{ width: 100, height:  100 }}/>
        <TextSymptoms>Tosse</TextSymptoms>
      </View>
      <View>
        <Image source={fever} style={{ width: 100, height:  100 }}/>
        <TextSymptoms>Febre</TextSymptoms>
      </View>
      <View>
        <Image source={tiredness} style={{ width: 100, height:  100 }}/>
        <TextSymptoms>Cansaço</TextSymptoms>
      </View>
    </>
  )
}