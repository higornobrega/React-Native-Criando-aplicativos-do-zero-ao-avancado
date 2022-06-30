import React, { Component } from 'react';

import {
  Image,
  Text,
  View,
} from 'react-native';

//Em forma de Função
/*function App(){
  return(
    <View>
      <Text>
      Olá Mundo
      </Text>
    </View>
  )
}
*/

//Em forma de Componentização
class App extends Component{
  render(){
    let nome = 'Steve Jobs';
    return(
      <View>
        <Text>
          Olá mundo!
        </Text>
         <Text>
          Olá mundo!
        </Text>
        <Text style={{ color:'#FF0000', fontSize:25, margin:15}}> 
          Meu Primeiro App
        </Text>
        
        <Jobs largura={500} altura={200} fulano={"Steve Jobs"} //Enviando props
        />

      </View>
    );
  }
}


class Jobs extends Component{
  render(){
    let url_img = 'https://sujeitoprogramador.com/steve.png';
    return(
      <View>
        <Image
            source={{ uri: url_img }}
            style={{ width:this.props.largura, height:this.props.altura}} //Recebendo Props
        />
        <Text style={{ fontSize:30}}>
        {this.props.fulano}
        </Text>
      </View>
    );
  }
}


export default App;