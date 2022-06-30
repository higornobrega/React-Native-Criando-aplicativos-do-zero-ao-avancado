import React, { Component } from 'react';

import {
  Button,
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
 
//Em forma de Componentização com props
// class App extends Component{
//   render(){
//     let nome = 'Steve Jobs';
//     return(
//       <View>
//         <Text>
//           Olá mundo!
//         </Text>
//          <Text>
//           Olá mundo!
//         </Text>
//         <Text style={{ color:'#FF0000', fontSize:25, margin:15}}> 
//           Meu Primeiro App
//         </Text>
        
//         <Jobs largura={500} altura={200} fulano={"Steve Jobs"} //Enviando props
//         />

//       </View>
//     );
//   }
// }


// class Jobs extends Component{
//   render(){
//     let url_img = 'https://sujeitoprogramador.com/steve.png';
//     return(
//       <View>
//         <Image
//             source={{ uri: url_img }}
//             style={{ width:this.props.largura, height:this.props.altura}} //Recebendo Props
//         />
//         <Text style={{ fontSize:30}}>
//         {this.props.fulano}
//         </Text>
//       </View>
//     );
//   }
// }


//Em forma de Componentização com states

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      nome: ''
    }
    this.entrar = this.entrar.bind(this) //Deixa a função visível para a classe
  }

  entrar(nome){
    this.setState({
      nome:nome
    })
  }

  render(){
    return(
      <View style={{marginTop: 20}}>
        <Button title='Entrar' onPress={() => this.entrar('Higor')}/>

        <Text style={{fontSize:23, color:'red', textAlign:'center'}}>
          {this.state.nome}
        </Text>
      </View>
    );
  }
}


export default App;