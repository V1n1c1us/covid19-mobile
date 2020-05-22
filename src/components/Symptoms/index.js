import React from 'react';
import {View, Image} from 'react-native'

import cough from '../../../assets/cough.png';
import fever from '../../../assets/fever.png';
import tiredness from '../../../assets/tiredness.png';

import { Container, ContentSymptoms, ContentSymptomsImage , TextSymptoms, TitleSymptoms, InfoSymptoms } from './styles';

export default function Symptoms() {

  return (
    <>
      <Container>
        <TitleSymptoms>Sintomas</TitleSymptoms>
        <InfoSymptoms>Os sintomas mais comuns do COVID-19 são:</InfoSymptoms>
        <ContentSymptoms>
          
          <ContentSymptomsImage>
            <Image source={cough} style={{ width: 80, height:  80 }}/>
            <TextSymptoms>Tosse</TextSymptoms>
          </ContentSymptomsImage>
          
          <ContentSymptomsImage>
            <Image source={fever} style={{ width: 80, height:  80 }}/>
            <TextSymptoms>Febre</TextSymptoms>
          </ContentSymptomsImage>
          
          <ContentSymptomsImage>
            <Image source={tiredness} style={{ width: 80, height:  80 }}/>
            <TextSymptoms>Cansaço</TextSymptoms>
          </ContentSymptomsImage>

        </ContentSymptoms>
      </Container>
    </>
  )
}