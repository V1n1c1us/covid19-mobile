import React, { useState, useEffect, useCallback } from 'react';
import { Image, StatusBar, Picker } from 'react-native'

import moment from 'moment';
import 'moment/locale/pt-br';

import states from '../../utils/brasil.js';
import api from '../../services/api';

import Loading from '../../components/Loading';
import Cards from '../../components/Card';

import {
  Container,
  Header,
  HeaderContainer,
  HeaderTitle,
  InfoTitle,
  InfoDescription,
  Title,
  SmallText,
} from '../globalStyle';

import {
  HeaderPicker,
  CardContainer,
  StateContainer,
  
} from './styles';

export default function BrStates() {
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
    handleFlags();
  }, [selectedValue]);  

  const handleFlags = useCallback(() => {
    const getFlag = `https://devarthurribeiro.github.io/covid19-brazil-api/static/flags/${selectedValue}.png`;
    setFlags(getFlag);
  },[selectedValue]);

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#473f96"
      />
      <Header style={{ elevation: 5}}>
      <HeaderContainer>
        <HeaderTitle>Covid-19</HeaderTitle>
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
        </HeaderContainer>
        <InfoTitle>
          Covid-19 pelos estados do Brasil?
        </InfoTitle>
        <InfoDescription>
          Acompanhe diariamente a evolução do COVID-19 em cada um de nossos estados. 
        </InfoDescription>
      </Header>

      <StateContainer>
        <Title>{cases.state}</Title>
        {loading ? (
          <Loading/>
        ): (
          <CardContainer>
            <Cards title="Casos Confirmados" cardColor="#f4a641">
              { cases.cases }
            </Cards>
            <Cards title="Óbitos" cardColor="#f45959">
              { cases.deaths }
            </Cards>
            <Cards title="Casos Suspeitos" cardColor="#473f96">
              { cases.suspects }
            </Cards>
            <Cards title="Total de Casos" cardColor="#3ed26f">
              { cases.cases + cases.deaths + cases.suspects }
            </Cards>
            <SmallText>Dados atualizado {moment(cases.datetime).startOf('hour').fromNow()}</SmallText>
          </CardContainer>
        )}
      </StateContainer>         
    </Container>
  );
}