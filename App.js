/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, AppRegistry, TextInput, ImageBackground, Button, TouchableOpacity } from 'react-native';
import sfondo from './sfondo.jpg'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  constructor() {
    super()
      this.state = {
        nome: '',
        email: '',
        password: '',
      }
  }



  render() {
    return (

      <ImageBackground source={sfondo} style={styles.container}>
        <View style={styles.campo}>

        <Text style={styles.reg}>REGISTRATI</Text>

        <Text style={styles.schermata}>Schermata di registrazione</Text>

        <Text style={styles.info}>LE MIE INFORMAZIONI</Text>

          <TextInput placeholder={'Nome'} style={styles.TextInput} onChangeText={(nome) => this.setState({nome})} />
          <TextInput placeholder={'Email'} style={styles.TextInput} onChangeText={(email) => this.setState({email})} />
          <TextInput placeholder={'Password'} style={styles.TextInput} onChangeText={(password) => this.setState({password})} />

          <View style={styles.sesso}>
            <TouchableOpacity onPress={this.props.onPress} activeOpacity={0.3}>
              <Text style={styles.sex}>Uomo</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={this.props.onPress} activeOpacity={0.3}>
              <Text style={styles.sex}>Donna</Text>
            </TouchableOpacity>

          </View>

          <TouchableOpacity onPress={this.props.onPress} activeOpacity={0.3} disabled={(this.state.nome == this.state.email == this.state.password) ? true : false}>
            <Text style={styles.button}>Crea Account</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground >
    );
  }
}



const styles = StyleSheet.create({

  reg: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
    marginLeft: 20,
  },

  schermata: {
    marginBottom: 40,
    color: '#ffffff',
    marginLeft: 20,
  },

  info: {
    color: '#ffffff',
    marginLeft: 20,
  },  

  container: {
    flex: 1,
  },
  sesso: {
    flexDirection: 'row',
    justifyContent: 'space-between',

  },
  TextInput: {
    backgroundColor: 'white',
    marginHorizontal: 20,
    marginVertical: 5,
  },

  button: {
    alignItems: 'center',
    backgroundColor: '#292929',
    color: '#ffffff',
    padding: 10,
    fontSize: 20,
    marginHorizontal: 20,
    textAlign: 'center',
    marginVertical: 10,
  },

  campo: {
    flex: 1,
    justifyContent: 'center',
  },

  sex: {
    alignItems: 'center',
    backgroundColor: '#292929',
    color: '#ffffff',
    padding: 10,
    fontSize: 20,
    marginHorizontal: 20,
    textAlign: 'center',
    marginVertical: 10,
    width: 120,
  },

})