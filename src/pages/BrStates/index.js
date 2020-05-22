import React, { useState, useEffect } from 'react';
import {Image, StatusBar, Linking, Picker} from 'react-native'

import moment from 'moment';
import 'moment/locale/pt-br';
import Icon from 'react-native-vector-icons/Feather';
import states from '../../utils/brasil.js';
import api from '../../services/api';

import Loading from '../../components/Loading';
import Cards from '../../components/Card';

import {
  Header,
  HeaderPicker,
  HeaderContainer,
  Container,
  InfoTitle,
  HeaderSelect,
  HeaderTitle,
  CardContainer,
  StateContainer,
  StateTitle,
  Footer,
  SmallText,
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
    const getFlag = `https://devarthurribeiro.github.io/covid19-brazil-api/static/flags/${selectedValue}.png`;
    setFlags(getFlag);
}, [selectedValue]);

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#473f96"
      />
      <Header>
        <HeaderContainer>
          <HeaderTitle>Covid-19</HeaderTitle>
        </HeaderContainer>
        <HeaderSelect>
          <InfoTitle>
            Selecione o estado
          </InfoTitle>
          <HeaderPicker>
            <Picker
              selectedValue={selectedValue}
              style={{ height: 32, width: 90, color: '#000', fontWeight: 'bold', elevation: 2 }}
              onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
              prompt="Selecione um Estado"
            >
              {states.map((item) => (
                <Picker.Item key={item.id} label={item.uf} value={item.uf} />
              ))}
            </Picker>
            <Image source={{uri: flags}} style={{width: 45, height: 30}}/>
          </HeaderPicker>
        </HeaderSelect>
      </Header>

      <StateContainer>
      <StateTitle>{cases.state}</StateTitle>
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
        <Cards title="Suspeitos" cardColor="#473f96">
        { cases.suspects }
        </Cards>
        <Cards cardColor="#3ed26f" icon="trending-up">
        { cases.cases + cases.deaths + cases.suspects }
        </Cards>
        <SmallText>Dados atualizado {moment(cases.datetime).startOf('hour').fromNow()}</SmallText>
      </CardContainer>
      )}
      </StateContainer>         
      <Footer>
        <SmallText onPress={() => Linking.openURL('https://github.com/V1n1c1us')}><Icon name="github" size={9} color="#000" /> V1n1c1us</SmallText>
      </Footer>
    </Container>
  );
}