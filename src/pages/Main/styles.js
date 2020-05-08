import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: #fff;
  flex: 1;
`;

export const Header = styled.View`
  background-color: #473f96;
  height: 290px;
  padding: 20px;
  border-bottom-left-radius: 40px;
  border-bottom-right-radius: 40px;
`;

export const HeaderText = styled.Text`
  font-size: 30px;
  font-weight: bold;
  margin-top: 20px;
  color: #fdfdfe;
`;

export const HeaderTitle = styled.Text`
  margin-top: 20px;
  font-size: 18px;
  color: #fdfdfe;
  font-weight: bold;
`;

export const HeaderDescription = styled.Text`
  font-size: 16px;
  margin-top: 10px;
  color: #fdfdfe;
`;

export const CardContainer = styled.View`
  margin-top: 20px;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Card = styled.View`
  background-color: ${props => props.cardColor || 'white'};
  margin: 10px 10px;
  padding: 10px;
  border-radius: 10px;
  min-width: ${props => props.cardWith || '110'}px;
`;

export const CardTitle = styled.Text`
  color: #fff;
`;

export const CardText = styled.Text`
  color: #fff;
  font-weight: bold;
  margin-top: 20px;
  font-size: 18px;
`;

export const ContainerSymptoms = styled.View`
  margin: 55px 15px;
  flex-direction: row;
  justify-content: space-between;
`;

export const TitleSymptoms = styled.Text`
  color: #473f96;
  font-weight: bold;
  margin: 10px 15px;
  font-size: 20px;
`;

export const InfoSymptoms = styled.Text`
  margin-left: 15px;
`;

export const TextSymptoms = styled.Text`
  margin-top: 5px;
  text-align: center;
  font-weight: bold;
  color: #473f96;

`;

export const Footer = styled.View`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 10px;

  align-items: center;
`;

export const FooterText = styled.Text`
  font-size: 10px;
`;