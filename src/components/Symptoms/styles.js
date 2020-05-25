import styled from 'styled-components';

export const Container = styled.View`
  flex: 1;
`;

export const ContentSymptoms = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: 20px;
`;

export const ContentSymptomsImage = styled.View`
  flex-direction: column;
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
  text-align: center;
`;

export const InfoSymptoms = styled.Text`
  margin-left: 15px;
`;