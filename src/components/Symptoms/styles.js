import styled from 'styled-components';

export const Container = styled.View`
  flex: 1;
`;

export const ContentSymptoms = styled.View`
  flex: 1;
  flex-direction: row;
  
  justify-content: space-between;
  align-items: center;

  margin: 20px;

`;

export const ContentSymptomsImage = styled.View`
`;


export const TextSymptoms = styled.Text`
  margin-top: 5px;
  text-align: center;
  font-weight: bold;
  color: #473f96;
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