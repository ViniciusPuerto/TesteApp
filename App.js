/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {ImageBackground, Platform, StyleSheet, Text, View, TouchableOpacity,Image} from 'react-native';
import Carousel from 'react-native-smart-carousel';
import img1 from './img/LOGO.png';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {
  render() {
    const datacarousel = [
      {
          "id": 1,
          "title": "This is snowman first title",
          "imagePath": "https://cdn.pixabay.com/photo/2017/12/09/16/41/snow-man-3008179_1280.jpg",
      },
      {
          "id": 2,
          "imagePath": img1,
      },
    ];
    return (
      
        <ImageBackground style={styles.container} source={require('./img/FUNDO.png')}>
          <View style ={styles.margTop}>
          </View>
          <Text style={styles.welcome}>Bem-Vindo</Text>
          <Text style={styles.welcome}>PRONTO PARA SER UM GUARDIÃO DA SAÚDE?</Text>
          <Carousel 
            data={datacarousel}
            height={460}
            />
          <View style={styles.viewButton}>
              <TouchableOpacity style={styles.viewButton2} onPress={()=>{alert("COLOCAR CAMINHO DO LOGIN")}}>
                <Image style={{width: 200 , height: 50}} source={require("./img/REG.png")}/>
              </TouchableOpacity>
              <TouchableOpacity style={styles.viewButton1} onPress={()=>{alert("COLOCAR CAMINHO DO REGISTRO")}}>
                <Image style={{width: 200 , height: 50}} source={require("./img/ENTRAR.png")}/>
              </TouchableOpacity>
              
          </View>
        </ImageBackground>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewButton1: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginBottom: 5,
  },
  viewButton2: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    marginBottom: 5,
  },
  welcome: {
    color: '#CD853F',
    alignItems: 'center',
    margin: 10,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  margTop: {
    backgroundColor: '#CD853F',
    height: 5,
  },
  viewButton: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 5,
  },
});
