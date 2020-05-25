import styled from 'styled-components/native';

export const Card = styled.View`
background-color: ${props => props.cardColor || 'white'};
margin: 10px 10px;
padding: 10px;
border-top-left-radius: 10px;
border-top-right-radius: 10px;
border-bottom-left-radius: 10px;
border-bottom-right-radius: 10px;
min-width: ${props => props.cardSize || '160'}px;
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