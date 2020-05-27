import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
  padding: 24px;
`;

export const Header = styled.View`
  margin-bottom: 20px;
`;

export const HeaderContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const HeaderTitle = styled.Text`
  font-size: 30px;
  color: #473f96;
  font-weight: bold;
`;

export const NewsContent = styled.View`
  border-radius: 8px;
  background-color: #fff;
  margin-bottom: 20px;
`;

export const NewsTitle = styled.Text`
  padding: 10px;
  font-size: 16px;
  font-weight: bold;
`;

export const NewsDescription = styled.Text`
  padding: 0 10px;
  font-size: 13px;
`;
export const NewsPublishAt = styled.Text`
  font-size: 11px;
`;

export const NewsFooter = styled.View`
  flex-direction: row;
  
  justify-content: space-between;
  align-items: center;

  padding: 10px;
`;

export const DetailsButtonText = styled.TouchableOpacity`
  color: #e02041;
  font-size: 15px;
  font-weight: bold;
`;

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  headerText: {
    fontSize: 15,
    color: '#737380'
  },
  headerTextBold: {
    fontWeight: 'bold'
  },
  title: {
    fontSize: 30,
    marginBottom: 16,
    marginTop: 48,
    color: '#13131a',
    fontWeight: 'bold'
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: '#737380'
  },

  incidentList: {
    marginTop: 32,
  },
  incident: {
    padding: 24,
    borderRadius: 8,
    backgroundColor: '#fff',
    marginBottom: 16
  },
  incidentProperty: {
    fontSize: 14,
    color: '#41414d',
    fontWeight: 'bold'
  },
  incidentValue: {
    marginTop: 8,
    fontSize: 15,
    marginBottom: 24,
    color: '#737380'
  },
  
  detailsButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  detailsButtonText: {
    color: '#e02041',
    fontSize: 15,
    fontWeight: 'bold'
  }



});