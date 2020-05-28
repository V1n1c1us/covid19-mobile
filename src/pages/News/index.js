import React, {useState, useEffect, useCallback } from 'react';
import {Image, Linking, FlatList} from 'react-native';

import Icon from 'react-native-vector-icons/Feather';
import moment from 'moment';
import 'moment/locale/pt-br';

import api from '../../services/api';
import Loading from '../../components/Loading';

import {
  Container,
  Header,
  HeaderContainer,
  HeaderTitle,
  NewsContent,
  NewsTitle,
  NewsDescription,
  NewsFooter,
  NewsPublishAt,
  DetailsButtonText,
} from './styles';

export default function News() {
  const [news, setNesw] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const handelNews = useCallback(async () => {
    await api.get('https://newsapi.org/v2/top-headlines?q=covid&country=br&category=health&apiKey=d43920d5a9b04a5dbd3e41a773b58b4b').then(response => {
      const { articles } = response.data;  
      setLoading(false);
      setNesw(articles);
    }).catch(() => {
      setLoading(true);
    });
  }, []);

  useEffect(() => {
    handelNews();
  }, []);

  return (
    <Container>
      <Header>
        <HeaderContainer>
          <HeaderTitle>Notícias</HeaderTitle>
        </HeaderContainer>
      </Header>
      {loading ? (
        <Loading/>
      ): (
        <FlatList
          data={news}
          keyExtractor={news => news.publishedAt}
          showsVerticalScrollIndicator={false}
          onEndReachedThreshold={0.2}
          refreshing={refreshing}
          onRefresh={() => handelNews()}
          renderItem={({ item: newItem}) => (
            <NewsContent>
            <Image style={{height: 200, resizeMode: 'cover'}} source={{uri: newItem.urlToImage}}/>
            <NewsTitle>{newItem.title}</NewsTitle>
            <NewsDescription>{newItem.description}</NewsDescription>
            <NewsFooter>
              <NewsPublishAt>Publicado {moment(newItem.publishedAt).startOf('hour').fromNow()}</NewsPublishAt>
              <DetailsButtonText
                onPress={() => Linking.openURL(newItem.url)}
                >
              <Icon name="arrow-right-circle" size={20} color="#473f96"/>
              </DetailsButtonText>
              </NewsFooter>
            </NewsContent>
          )}  
        />
      )} 
    </Container>
  );
}