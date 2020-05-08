import React, { useState, useEffect } from 'react';
import {Image, StatusBar, Text, View, Linking} from 'react-native'

import moment from 'moment';
import 'moment/locale/pt-br';
import Icon from 'react-native-vector-icons/Feather';
import { FlatList } from 'react-native-gesture-handler';

import api from '../../services/api';

import cough from '../../../assets/cough.png';
import fever from '../../../assets/fever.png';
import tiredness from '../../../assets/tiredness.png';

import Loading from '../../components/Loading';

import { Header, Container, HeaderText, HeaderTitle, HeaderDescription, CardContainer, Card,CardTitle, CardText, TitleSymptoms, InfoSymptoms, ContainerSymptoms, TextSymptoms, Footer, FooterText} from './styles';

export default function Main() {
  const [loading, setLoading] = useState(true);
  const [cases, setCases] = useState([]);
  
  useEffect(() => {
    api.get('BR/confirmed').then(response => {
      setCases(response.data);
      setLoading(false);
    });
  }, []);
  
  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#473f96"
      />
      <Header>
        <HeaderText>Covid-19</HeaderText>
          <HeaderTitle>
            Você está se sentindo doente?
          </HeaderTitle>
        <HeaderDescription>
          As pessoas que contraíram o vírus podem levar até 14 dias antes de apresentarem algum sintoma. Se você apresentar algum sintoma, procure atendimento médico.
        </HeaderDescription>
        <Text style={{ fontSize: 11, color: '#fff', marginTop: 20}}>Fonte: Organização Mundial da Saúde (OMS)</Text>
      </Header>
      { loading ? (
        <Loading/>
      ) : (
        <FlatList
          data={cases}
          keyExtractor={cases => cases.uid.toString()}
          renderItem={({ item: caseItem}) => (
          <CardContainer>
              <Card cardColor="#f4a641" cardWith="110">
                <CardTitle>Confirmados</CardTitle>
                <CardText>{caseItem.confirmed}</CardText>
              </Card>
              <Card cardColor="#3ed26f">
                <CardTitle>Recuperados</CardTitle>
                <CardText>{caseItem.recovered}</CardText>
              </Card>
              <Card cardColor="#f45959" style={{ flexGrow: 0}}>
                <CardTitle>Mortes</CardTitle>
                <CardText>{caseItem.deaths}</CardText>
              </Card>
              <Card cardColor="#473f96">
                <CardTitle>Ativos</CardTitle>
                <CardText>{caseItem.active}</CardText>
              </Card>
              <Card cardColor="#4cb5ff">
                <Icon name="percent" size={20} color="#fdfdfe" />
                <CardText>{Math.floor(caseItem.incidentRate * 10) / 10}</CardText>
              </Card>
            </CardContainer>
          )}
        />
      )}
        
      <TitleSymptoms>Sintomas</TitleSymptoms>
        <InfoSymptoms>Os sintomas mais comuns do COVID-19 são:</InfoSymptoms>
          <ContainerSymptoms>
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
          </ContainerSymptoms>
        
      <Footer>
        <FooterText>Dados atualizado {moment(cases.lastUpdate).startOf('hour').fromNow()} </FooterText>
        <FooterText onPress={() => Linking.openURL('https://github.com/V1n1c1us')}><Icon name="github" size={9} color="#000" /> V1n1c1us</FooterText>
      </Footer>
    </Container>
  );
}