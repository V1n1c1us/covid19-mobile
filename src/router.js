import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/FontAwesome5';

import Main from '../src/pages/Main';
import BrStates from '../src/pages/BrStates';
import News from '../src/pages/News';

const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
     <Tab.Navigator
      initialRouteName="Main"
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
              <Icon name="globe-americas" color={color} size={26}/>
            ),
          }}
          />
        <Tab.Screen
          name="BrStates"
          component={BrStates}
          options={{
            tabBarIcon: ({ color, focused }) => (
              <Icon name={'map-marked-alt'} color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="News"
          component={News}
          options={{
            tabBarIcon: ({ color, focused }) => (
              <Icon name={'newspaper'} color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}