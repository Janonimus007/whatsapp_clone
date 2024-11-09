import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TopTabNavigator from '../TopTab/Index';
import Colors from '../../Constants/Colors';
import { StyleSheet, View } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Entypo from '@expo/vector-icons/Entypo';

const Stack = createStackNavigator();

const MainNavigation = () => (
    <Stack.Navigator
    screenOptions={{
  
          headerStyle: {
            backgroundColor: Colors.light.tint, 
          },
          headerTintColor: Colors.light.background, 
          headerTitle: 'WhatsApp', 
          headerTitleAlign: 'left',
          headerTitleStyle: {
            fontWeight: 'bold',
          },

        headerRight: () => (
          <View style={styles.containerIcons}>
            <FontAwesome name="search" size={22} color={Colors.light.background} style={styles.iconSearch} />
            <Entypo name="dots-three-vertical" size={22} color={Colors.light.background} />
          </View>
        ),
        
      }}
    >
      <Stack.Screen name="Home" component={TopTabNavigator} />
    </Stack.Navigator>
  );
  
  export default MainNavigation;

  const styles = StyleSheet.create({
    containerIcons:{
        flexDirection: 'row', 
        marginRight: 10 
    },
    iconSearch:{
        marginRight: 22
    }
  })