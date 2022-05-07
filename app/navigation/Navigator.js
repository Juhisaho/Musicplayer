import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import AudioList from '../src/AudioList';
import Player from '../src/Player';

import { MaterialIcons, FontAwesome } from '@expo/vector-icons';


const Tab = createBottomTabNavigator();



const AppNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name='List'
        component={AudioList}
        options={{
          tabBarIcon: ({}) => (
            <MaterialIcons name='list' size={30} color={'black'} />
          ),
        }}
      />
      <Tab.Screen
        name='Player'
        component={Player}
        options={{
          tabBarIcon: ({}) => (
            <FontAwesome name='play' size={30} color={'black'} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AppNavigator;
