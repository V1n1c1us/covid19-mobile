import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/Feather';

import Main from '../src/pages/Main';
import BrStates from '../src/pages/BrStates';
import News from '../src/pages/News';

const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
     <Tab.Navigator
      initialRouteName="BrStates"
      tabBarOptions={{
        activeTintColor: '#473F97',
        showLabel: false,
        lazyLoad: true,
      }}>
        <Tab.Screen
          name="Main"
          component={Main}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="home" color={color} size={size}/>
            ),
          }}
          />
        <Tab.Screen
          name="BrStates"
          component={BrStates}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="bar-chart-2" size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="News"
          component={News}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="file-text" size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}