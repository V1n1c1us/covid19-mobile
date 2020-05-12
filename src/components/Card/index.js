import React from 'react';
import Icon from 'react-native-vector-icons/Feather';

import {
  Card,
  CardTitle,
  CardText
} from './styles'

export default function Cards({ title, cardColor, children, icon }) {

  return (
    <Card cardColor={cardColor} style={{ elevation: 2}}>
      { icon
        ? <Icon name={icon} size={20} color="#fdfdfe" />
        : <CardTitle>{title}</CardTitle>
      }
        <CardText>{children}</CardText>
    </Card>
  )
}