import React, {Component} from 'react';

import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';

export default class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      numero : 0,
      estatus : 'Vai',
      ultimo : 0,
    }
    //Variavel do timer do relógio
    this.timer = null;
    this.vai = this.vai.bind(this);
    this.limpar = this.limpar.bind(this);
  }

  vai(){

    if(this.timer != null){
      //Aqui vai parar o timer
      clearInterval(this.timer);
      this.timer = null;
      this.setState({
        estatus: 'Vai'
      })
    }else{
      this.timer = setInterval(()=> {
        this.setState({
          numero: this.state.numero + 0.1,
          estatus: 'Pausar'})
      }, 100);
    }

  }

  limpar(){
    if(this.timer != null){
      clearInterval(this.timer);
      this.timer = null    
    }
    this.setState({
      ultimo: this.state.numero,
      numero:0,
      estatus: 'Vai'
    })
  }

  render(){
    return (
      <View style={styles.container}>
        <Image
          source={require('./src/cronometro.png')}
          style={styles.cronometro}
        />
        <Text style={styles.timer}>{this.state.numero.toFixed(1)}</Text>

        <View style={styles.btnArea}>

        <TouchableOpacity 
          style={styles.btn}
          onPress={this.vai}
          >
            <Text style={styles.btnTexto}>
              {this.state.estatus}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.btn}
            onPress={this.limpar}
            >
            <Text style={styles.btnTexto}>
              Limpar
            </Text>
          </TouchableOpacity>

        </View>

        <View style={styles.areaUltima}>
          <Text style={styles.textoCorrido}>
            Ultimo tempo: {this.state.ultimo.toFixed(1)}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00aeef'
  },
  timer:{
    marginTop: -160,
    color: '#FFF',
    fontSize: 65,
    fontWeight:'bold',
  },
  btnArea:{
    flexDirection: 'row',
    marginTop: 70,
    height: 40,
  },
  btn:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
    height: 40,
    margin: 17,
    borderRadius: 9,
  },
  btnTexto:{
    fontSize: 20,
    fontWeight: 'bold',
    color: '#00aeef',
  },
  areaUltima: {
    marginTop: 40
  },
  textoCorrido:{
    fontSize: 25,
    fontStyle: 'italic',
    color: '#FFF',
  }
});
