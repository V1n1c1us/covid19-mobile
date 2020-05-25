import React, { useState, useEffect } from 'react';
import { StatusBar, Text } from 'react-native'

import moment from 'moment';
import 'moment/locale/pt-br';

import api from '../../services/api';

import Loading from '../../components/Loading';
import Cards from '../../components/Card';
import Symptoms from '../../components/Symptoms';

import {
  Container,
  Header,
  HeaderContainer,
  HeaderTitle,
  InfoDescription,
  InfoTitle,
  Title,
  SmallText,
} from '../globalStyle';

import {
  StateContainer,
  CardContainer,
  ContainerSymptoms,
} from './styles';

export default function Main() {
  const [loading, setLoading] = useState(true);
  const [cases, setCases] = useState([]);

  useEffect(() => {
    api.get(`/`).then(response => {
      setCases(response.data.data)
      setLoading(false);
    }).catch(() => {
      setLoading(true);
    })
  }, []);

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#473f96"
      />
      <Header style={{ elevation: 5}}>
        <HeaderContainer>
          <HeaderTitle>Covid-19</HeaderTitle>
        </HeaderContainer>
        <InfoTitle>
          Você está se sentindo doente?
        </InfoTitle>
        <InfoDescription>
          As pessoas que contraíram o vírus podem levar até 14 dias antes de apresentarem algum sintoma. Se você apresentar algum sintoma, procure atendimento médico.
        </InfoDescription>
        <Text style={{ fontSize: 11, color: '#fff', marginTop: 30}}>Fonte: Organização Mundial da Saúde (OMS)</Text>
      </Header>

      <StateContainer>
        <Title>Brasil</Title>
        {loading ? (
          <Loading/>
        ): (
          <CardContainer>
            <Cards title="Casos Confirmados" cardColor="#f4a641">
              { cases.confirmed }
            </Cards>
            <Cards title="Óbitos" cardColor="#f45959">
              { cases.deaths }
            </Cards>
            <Cards title="Casos Ativos" cardColor="#473f96">
              { cases.cases }
            </Cards>
            <Cards title="Casos Recuperados" cardColor="#3ed26f">
              { cases.recovered }
            </Cards>
            <SmallText>Dados atualizado {moment(cases.updated_at).startOf('hour').fromNow()}</SmallText>
          </CardContainer>
        )}
      </StateContainer>         

      
      <ContainerSymptoms>
        <Symptoms/>
      </ContainerSymptoms>
    </Container>
  );
}