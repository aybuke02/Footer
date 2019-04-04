import React, {Component} from 'react';
import {StyleSheet,
   Text,
    View
  } from 'react-native';
  import Icon from 'react-native-vector-icons/Ionicons'
  export default class Profil extends Component{
      

      render() {
        return (
          <View style={styles.container}>
            <Text>Profil</Text>
          </View>
        );
      }
    }
      const styles = StyleSheet.create({
        container: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#F5FCFF',
        },
    });
