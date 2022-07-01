import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  TextInput,
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

// class App extends Component{
//   constructor(props){
//     super(props);
//     this.state = {
//       nome: ''
//     }
//     this.entrar = this.entrar.bind(this) //Deixa a função visível para a classe
//   }

//   entrar(nome){
//     this.setState({
//       nome:nome
//     })
//   }

//   render(){
//     return(
//       <View style={styles.area}>
//         <View style={styles.part1}>
//           <Button title='Entrar' onPress={() => this.entrar('Higor')}/>

//           <Text style={styles.estilo_nome}>
//             {this.state.nome}
//           </Text>

//         </View>

//         <View style={styles.part2}>
//           <Text>
//             {this.state.nome}
//           </Text>
//         </View>
        
//         <View style={styles.part3}>
//           <Text style={styles.estilo_nome}>
//             {this.state.nome}
//           </Text>
          
//           <Text style={[styles.estilo_nome, styles.bord]}>
//             {this.state.nome}
//         </Text>
//         </View>
     
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   estilo_nome: {
//   fontSize:23, 
//   color:'red', 
//   textAlign:'center'
//   },
//   area: {
//     flex: 1,
//     backgroundColor:'#222',
//     marginTop:40
//   },
//   bord : {
//     padding: 24,
//     color:'black',
//   },
//   part1 :{
//     backgroundColor:'red',
//     height: 65,
//     // flex: 1,
//   },
//   part2 : {
//     backgroundColor:'green',
//     flex: 2,
//   },
//   part3 : {
//     backgroundColor: 'yellow',
//     height: 65,
//     // flex: 2,
//   }
// });


//Flex box e alinhamento
/*
  *flexDirection:
    -'column': Alinha em coluna(Vertical), um abaixo do outro (default)
    -'row': Alinha em linha(Horizontal), um ao lado do outro 
  *justifyContent:
    -'flex-start': Coloca no inicio da tela (default) - (Horizontal)
    -'center': Coloca no centro da tela - (Horizontal)
    -'space-between': Coloca um espaço entre os itens, exceto antes do primeiro e após o ultimo - (Horizontal)
    -'space-between': Coloca um espaço entre os itens, inclusive antes do primeiro e após o último - (Horizontal)
        -'stretch': Completa a linha
  *alignItems:
    -'flex-start': Coloca no inicio da tela (default) - (Vertical)
    -'center': Coloca no centro da tela - (Vertical)
    -'space-between': Coloca um espaço entre os itens, exceto antes do primeiro e após o ultimo - (Vertical)
    -'space-between': Coloca um espaço entre os itens, inclusive antes do primeiro e após o último - (Vertical)
    -'stretch': Completa a linha se flexDirection estiver column e width não estiver definid, ou completa a coluna se flexDirection estiver row e não tiver height definido 
      ->flexDirection tem que ser 'column' e não pode ter width definida
*/
// class App extends Component{
//   render(){
//     return(
//       <View style={{flex:1, 
//                     flexDirection:'row', 
//                     alignItems:'stretch',
//                     // justifyContent:'stretch'                  
//                     }}>
//         <View style={{ width:50, backgroundColor: 'red'}}>

//         </View>
//         <View style={{width:50, backgroundColor: 'green'}}>

//         </View>
//         <View style={{width:50, backgroundColor: 'blue'}}>

//         </View>
//       </View>
//     )
//   }
// }

//Input
class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      nome : ''
    }
    this.pegaNome = this.pegaNome.bind(this)
  }

  pegaNome(texto){
    if(texto.length > 0){

      this.setState({nome:'Bem Vindo ' + texto})
    } else {
      this.setState({nome:''})

    }
  }

  render(){

    return(
      <View style={styles.container}>
        <TextInput 
        style={styles.input} 
        placeholder="Digite seu nome"
        underlineColorAndroid="transparente"
        onChangeText={this.pegaNome}
        />
        <Text style={styles.texto}>{this.state.nome}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  input:{
    height: 45,
    borderWidth:1,
    borderColor:'#222',
    margin: 10,
    marginTop:40,
    fontSize:20,
    padding: 10,
  },
  texto:{
    textAlign:'center',
    fontSize:25,
  }
})

export default App;