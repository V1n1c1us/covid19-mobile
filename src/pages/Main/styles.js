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

export const HeaderPicker = styled.View`
  margin-top: 10px;
  flex-direction: row;
  align-items: center;
  background-color: #fff;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  width: 135px;
`;

export const HeaderText = styled.Text`
  font-size: 30px;
  font-weight: bold;
  margin-top: 10px;
  color: #fdfdfe;
`;

export const HeaderTitle = styled.Text`
  margin-top: 10px;
  font-size: 18px;
  color: #fdfdfe;
  font-weight: bold;
`;

export const HeaderDescription = styled.Text`
  font-size: 16px;
  margin-top: 5px;
  color: #fdfdfe;
`;

export const StateContainer = styled.View`
  padding: 5px;
  margin-top: 10px;
  justify-content: center;
  align-items: center;
`;

export const StateTitle = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #473f96;
`;

export const CardContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

export const ContainerSymptoms = styled.View`
  margin: 40px 15px;
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