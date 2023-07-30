import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'

import { MaterialCommunityIcons} from 'react-native-vector-icons';
import Chat from './Screens/Chat';
import Calls from './Screens/Calls';
import Community from './Screens/Community';
import Status from './Screens/Status';


const Tab=createMaterialTopTabNavigator();

const Navigation = () => {
  return (
    <Tab.Navigator initialRouterName='Chat'
    screenOptions={{
        tabBarActiveTintColor:'white',
        tabBarIconStyle:{
            backgroundColor:'white'
        },
        tabBarLabelStyle:{
            fontWeight:'bold'
        },
        tabBarStyle:{
            backgroundColor:'#0e806a'
        }
    }}
    >
       <Tab.Screen
        name='Community'
        component={Community}
        options={{
            tabBarIcon:({color})=>{
           <MaterialCommunityIcons name='account-group' size={24} color={color}/>     
            }
           
        }}/>
        <Tab.Screen
        name='Calls'
        component={Calls}
        />
        <Tab.Screen
        name='Chat'
        component={Chat}/>
        <Tab.Screen
        name='Status'
        component={Status}/>
        
    </Tab.Navigator>
  )
}

export default Navigation

const styles = StyleSheet.create({
   
   
  });