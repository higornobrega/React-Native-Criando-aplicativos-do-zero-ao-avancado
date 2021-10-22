import React, {Component} from 'react';

import {
  Image,
  Text,
  View,
} from 'react-native';

class App extends Component {
  render() {
    let nome = 'Higor';

    return (
      <View>
        <Text>Olá Mundo!!!</Text>
        <Text>Meu Primeiro App</Text>
        <Text style={{color: '#FF0000', fontSize: 25, margin: 15}}>
          {' '}
          OiiII{' '}
        </Text>
        {/* Enviando dados para outro componente */} 
       <Jobs largura={100} altura={100} fulano={'STIVES JOBS'}/>       

      </View>
    );
  }
}

// function App(params) {
//   return(
//     <View>
//       <Text>Olá Mundo</Text>
//     </View>
//   )
// }

export default App;

class Jobs extends Component {
  render() {
    let img = 'https://sujeitoprogramador.com/steve.png';
    return (
      <View>
        {/* Recebendo dados de outro componente */}
        <Image source={{uri: img}} style={{width: this.props.largura, height: this.props.altura}} />
        <Text>{this.props.fulano}</Text>
      </View>
    );
  }
}
