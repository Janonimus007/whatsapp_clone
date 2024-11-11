// navigation/topTab/TopTabNavigator.tsx
import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Text, View } from 'react-native';
import ChatsScreen from '../../Screens/Chats/ChatsScreen';
import CallsScreen from '../../Screens/Calls/CallsScreen';
import Colors from '../../Constants/Colors';
import {MainTabParamList} from '../../../types'
import Fontisto from '@expo/vector-icons/Fontisto';
const Tab = createMaterialTopTabNavigator<MainTabParamList>();

export default function TopTabNavigator() {
  return (
    <Tab.Navigator
    screenOptions={{
        tabBarStyle: {
            backgroundColor: Colors.light.tint, 
          },
          tabBarActiveTintColor: Colors.light.background, 
          tabBarIndicatorStyle: {
            backgroundColor: Colors.light.background, 
            height:3
          },
          tabBarLabelStyle:{
            fontWeight:'bold'
          },
          tabBarShowIcon:true
        
      }}
      initialRouteName='Chats'
    >
      <Tab.Screen 
        options={{
          tabBarIcon:({color})=><Fontisto name="camera" size={16} color={color}/>,
          tabBarLabel:()=>null
          
        }}
        name="Camera" component={ChatsScreen} 
      />
      <Tab.Screen name="Chats" component={ChatsScreen} />
      <Tab.Screen  name="Status" component={CallsScreen} />
      <Tab.Screen  name="Calls" component={ChatsScreen} />
 
    </Tab.Navigator>
  );
}
