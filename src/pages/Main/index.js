import React, { useState, useEffect, useCallback } from 'react';
import {Image, StatusBar, Text, View, Linking, Picker} from 'react-native'

import moment from 'moment';
import 'moment/locale/pt-br';
import Icon from 'react-native-vector-icons/Feather';
import states from '../../utils/brasil.js';
import api from '../../services/api';

import Loading from '../../components/Loading';
import Cards from '../../components/Card/';
import Symptoms from '../../components/Symptoms';

import {
  Header,
  HeaderPicker,
  Container,
  HeaderText,
  HeaderTitle,
  HeaderDescription,
  StateContainer,
  StateTitle,
  CardContainer,
  TitleSymptoms,
  InfoSymptoms,
  ContainerSymptoms,
  Footer,
  FooterText
} from './styles';

export default function Main() {
  const [loading, setLoading] = useState(true);
  const [cases, setCases] = useState([]);
  const [flags, setFlags] = useState();
  const [selectedValue, setSelectedValue] = useState('AC');

  useEffect(() => {
    api.get(`uf/${selectedValue}`).then(response => {
      setCases(response.data)
      setLoading(false);
    }).catch(() => {
      setLoading(true);
    })
    const getFlag = `https://devarthurribeiro.github.io/covid19-brazil-api/static/flags/${selectedValue}.png`;
    setFlags(getFlag);
}, [selectedValue]);


  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#473f96"
      />
      <Header style={{ elevation: 5}}>
        <HeaderText>Covid-19</HeaderText>
        <HeaderPicker>
            <Picker
              selectedValue={selectedValue}
              style={{ height: 32, width: 90, color: '#000', fontWeight: 'bold', elevation: 2}}
              onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
              prompt="Selecione um Estado"
            >
              {states.map((item) => (
                <Picker.Item key={item.id} label={item.uf} value={item.uf} />
              ))}
          </Picker>
          <Image source={{uri: flags}} style={{width: 32, height: 20}}/>
          </HeaderPicker>
        <HeaderTitle>
          Você está se sentindo doente?
        </HeaderTitle>
        <HeaderDescription>
          As pessoas que contraíram o vírus podem levar até 14 dias antes de apresentarem algum sintoma. Se você apresentar algum sintoma, procure atendimento médico.
        </HeaderDescription>
        <Text style={{ fontSize: 11, color: '#fff', marginTop: 20}}>Fonte: Organização Mundial da Saúde (OMS)</Text>
      </Header>

      <StateContainer>
        <StateTitle>{cases.state}</StateTitle>
      </StateContainer>

      {loading ? (
        <Loading/>
      ): (
      <CardContainer>
        <Cards title="Confirmed" cardColor="#f4a641">
          { cases.cases }
        </Cards>
        <Cards title="Mortes" cardColor="#f45959">
          { cases.deaths }
        </Cards>
        <Cards title="Suspeitos" cardColor="#473f96">
          { cases.deaths }
        </Cards>
        <Cards cardColor="#3ed26f" icon="trending-up">
          { cases.cases + cases.deaths + cases.suspects }
        </Cards>
      </CardContainer>
      )}

      <TitleSymptoms>Sintomas</TitleSymptoms>
        <InfoSymptoms>Os sintomas mais comuns do COVID-19 são:</InfoSymptoms>
        <ContainerSymptoms>
          <Symptoms/>
        </ContainerSymptoms>
      <Footer>
        <FooterText>Dados atualizado {moment(cases.datetime).startOf('hour').fromNow()} </FooterText>
        <FooterText onPress={() => Linking.openURL('https://github.com/V1n1c1us')}><Icon name="github" size={9} color="#000" /> V1n1c1us</FooterText>
      </Footer>
    </Container>
  );
}