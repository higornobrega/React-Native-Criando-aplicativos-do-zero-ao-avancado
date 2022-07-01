import React, { Component } from 'react';

import {
  Button,
  StyleSheet,
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
      <View style={styles.area}>
        <View style={styles.part1}>
          <Button title='Entrar' onPress={() => this.entrar('Higor')}/>

          <Text style={styles.estilo_nome}>
            {this.state.nome}
          </Text>

        </View>

        <View style={styles.part2}>
          <Text>
            {this.state.nome}
          </Text>
        </View>
        
        <View style={styles.part3}>
          <Text style={styles.estilo_nome}>
            {this.state.nome}
          </Text>
          
          <Text style={[styles.estilo_nome, styles.bord]}>
            {this.state.nome}
        </Text>
        </View>
     
      </View>
    );
  }
}

const styles = StyleSheet.create({
  estilo_nome: {
  fontSize:23, 
  color:'red', 
  textAlign:'center'
  },
  area: {
    flex: 1,
    backgroundColor:'#222',
    marginTop:40
  },
  bord : {
    padding: 24,
    color:'black',
  },
  part1 :{
    backgroundColor:'red',
    height: 65,
    // flex: 1,
  },
  part2 : {
    backgroundColor:'green',
    flex: 2,
  },
  part3 : {
    backgroundColor: 'yellow',
    height: 65,
    // flex: 2,
  }
});
export default App;