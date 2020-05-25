import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: #fff;
  flex: 1;
`;

export const HeaderPicker = styled.View`
  flex-direction: row;
  align-items: center;

  width: 130px;
  background-color: #fff;

  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
`;

export const InfoTitle = styled.Text`
  margin-top: 30px;
  font-size: 18px;
  color: #473f96;
  font-weight: bold;
  text-align: center;
`;
export const InfoDescription = styled.Text`
  font-size: 16px;
  margin-top: 10px;
  color: #473f96;
`;

export const StateContainer = styled.View`
  flex: 1;
  margin-top: 15px;
`;

export const StateTitle = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #473f96;
  text-align: center;
`;

export const CardContainer = styled.View`
  flex-direction: row;
  flex: 1;
  flex-wrap: wrap;

  justify-content: center;
`;
