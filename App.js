/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { createBottomTabNavigator,createAppContainer} from 'react-navigation'
import Icon from 'react-native-vector-icons/Ionicons'
import AnaSayfa from './src/components/AnaSayfa'
import Favorilerim from './src/components/Favorilerim'
import Kategoriler from './src/components/Kategoriler'
import YeniEkle from './src/components/YeniEkle'
import Profil from './src/components/Profil'
const TabNavigator = createBottomTabNavigator({
   AnaSayfa:{ screen:AnaSayfa ,
    navigationOptions:{
      tabBarLabel:'Ana Sayfa',
      tabBarIcon : ({tintColor}) =>(
        <Icon name="ios-home"  color={tintColor} size={24} />
      )
  }},
   Kategoriler:{ screen:Kategoriler,
    navigationOptions:{
      tabBarLabel:'Kategoriler',
      tabBarIcon : ({tintColor}) =>(
        <Icon name="ios-list" color={tintColor} size={24} />
      ) 
    }},
   YeniEkle:{ screen: YeniEkle ,
    navigationOptions:{
      tabBarLabel:'Yeni Ekle',
      tabBarIcon : ({tintColor}) =>(
        <Icon name="ios-add"  color={tintColor} size={24} />
        )
  }},
   Favorilerim:{ screen: Favorilerim,
    navigationOptions:{
      tabBarLabel:'Favorilerim',
      tabBarIcon : ({tintColor}) =>(
        <Icon name="ios-heart-empty" color={tintColor} size={24} />
      )
    }},  
  Profil:{screen: Profil,
    navigationOptions:{
      tabBarLabel:'Profil',
      tabBarIcon : ({tintColor}) =>(
        <Icon name="ios-person" color={tintColor} size={24} />
      )
    }},
},{
        tabBarPosition:"bottom",
        tabBarOptions: {
          activeTintColor:'red',
          inactiveTintColor:'grey',
         
        }
}
   
);


export default createAppContainer(TabNavigator);

