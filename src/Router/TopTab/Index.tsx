// navigation/topTab/TopTabNavigator.tsx
import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Text, View } from 'react-native';
import ChatsScreen from '../../Screens/Chats/ChatsScreen';
import CallsScreen from '../../Screens/Calls/CallsScreen';
import Colors from '../../Constants/Colors';

const Tab = createMaterialTopTabNavigator();

export default function TopTabNavigator() {
  return (
    <Tab.Navigator
    screenOptions={{
        tabBarStyle: {
            backgroundColor: Colors.light.tint, // Color del fondo de la barra de pestañas
          },
          tabBarActiveTintColor: Colors.light.background, // Color del texto activo
          tabBarInactiveTintColor: 'gray', // Color del texto inactivo
          tabBarIndicatorStyle: {
            backgroundColor: Colors.light.background, // Color del indicador
          },
        //   headerStyle: {
        //     backgroundColor: Colors.light.tint, 
        //   },
        //   headerTintColor: Colors.light.background, 
        //   headerTitle: 'WhatsApp', 
        //   headerTitleAlign: 'left',
        //   headerTitleStyle: {
        //     fontWeight: 'bold',
        //   },

        // headerRight: () => (
        //   <View style={{ flexDirection: 'row', marginRight: 10 }}>
        //     <FontAwesome name="search" size={22} color={Colors.light.background} style={{ marginRight: 22 }} />
        //     <Entypo name="dots-three-vertical" size={22} color={Colors.light.background} />
        //   </View>
        // ),
        
      }}
    >
      <Tab.Screen name="ChatsScreen" component={ChatsScreen} />
      <Tab.Screen name="CallsScreen" component={CallsScreen} />
    </Tab.Navigator>
  );
}
