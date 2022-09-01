import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList} from 'react-native';
import React, { Component } from 'react';

export default class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      feed:[
        {id:'1', nome: 'Higor', idade: 27, email:"higorst.nobrega@gmail.com"},
        {id:'2',nome: 'Higor1', idade: 28, email:"higorst1.nobrega@gmail.com"},
        {id:'3',nome: 'Higor2', idade: 29, email:"higorst2.nobrega@gmail.com"},
        {id:'4',nome: 'Higor3', idade: 30, email:"higorst3.nobrega@gmail.com"},
        {id:'5d',nome: 'Higor4', idade: 31, email:"higorst4.nobrega@gmail.com"},
        {id:'5d',nome: 'Higor5', idade: 31, email:"higorst5.nobrega@gmail.com"},
        {id:'5d',nome: 'Higor7', idade: 31, email:"higorst6.nobrega@gmail.com"},
      ]
    }
  }
  render(){
    return(
      <View style={styles.container}>
        {/* Só Renderiza os itens que estão sendo mostrado na tela
          data - São os dados
          renderItem - Responsável por mostrar a lista, renderizar na tela
          keyExtractor = Informa a id/chave unica 
        
        */}
        <FlatList 
          data={this.state.feed}
          keyExtractor={(item) => item.id}
          renderItem={
            ({item})=> <Pessoa data={item}/>
          }

        />
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  areaPessoa:{
    backgroundColor:'#222',
    height: 200,
    marginBottom: 15,
  },
  textoPessoa:{
    color: '#FFF',
    fontSize: 20,
  }
});


class Pessoa extends Component{
  render(){
    return(
      <View style={styles.areaPessoa}>
        <Text style={styles.textoPessoa} >Nome: {this.props.data.nome}</Text>
        <Text style={styles.textoPessoa} >Idade: {this.props.data.idade}</Text>
        <Text style={styles.textoPessoa}>Email: {this.props.data.email}</Text>
      </View>
    )
  }
}