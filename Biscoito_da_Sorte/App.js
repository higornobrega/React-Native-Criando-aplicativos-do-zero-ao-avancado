import React, { Component } from 'react';

import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

//Minha versão
// class App extends Component{
//   constructor(props){
//     super(props);
//     this.state = {
//       frase:''
//     }
//     this.novaFrase = this.novaFrase.bind(this)
//   }


//   novaFrase(){
//     let fras = ['A vida trará coisas boas se tiver paciência.','Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.', 'Não compense na ira o que lhe falta na razão.', 'Defeitos e virtudes são apenas dois lados da mesma moeda.', 'A maior de todas as torres começa no solo.']
//     this.setState({frase: fras[Math.floor(Math.random() * fras.length)]})
//   }

//   render(){
//     return(
//       <View style={styles.container}>
//         <Button 
//           style = {styles.bt}
//           title='Nova Frase'
//           onPress={this.novaFrase}
//         />
//         <Text>{this.state.frase}</Text>
//       </View>
//     )
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flexDirection:'column', 
//     alignItems:'center',
//     justifyContent: 'center',
//     marginTop:50,

//   },
//   header:{
//     width: 50,
//     height: 50,
//     backgroundColor:'#000',
//   },
//   bt: {
//     width: 50,
//     height: 50,
//   },
//   footer:{
//     width: 50,
//     height: 50,
//     backgroundColor:'#000',

//   }
// });


class App extends Component{
  constructor(props){
    super(props);
    this.state ={
      textoFrase: '',
      img:require('./src/biscoito.png')
    }
    this.quebraBiscoito = this.quebraBiscoito.bind(this)
    this.frases = [
      'A vida trará coisas boas se tiver paciência.',
      'Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.', 
      'Não compense na ira o que lhe falta na razão.', 
      'Defeitos e virtudes são apenas dois lados da mesma moeda.', 
      'A maior de todas as torres começa no solo.'
    ];
  }

  quebraBiscoito(){
    let numeroAleatorio = Math.floor(Math.random() * this.frases.length);
    this.setState({
      textoFrase: ' "' + this.frases[numeroAleatorio] + '" ',
      img:require('./src/biscoitoAberto.png'),
    })
  }

  render(){
    return(
      <View style={styles.container}>
        <Image
          source={this.state.img}
          style={styles.img}
        />
        <Text style={styles.textoFrase}>{this.state.textoFrase}</Text>
        <TouchableOpacity 
        style={styles.botao}
        onPress = {this.quebraBiscoito}
        >
          <View style={styles.btnArea}>
            <Text style={styles.btnTexto}>
              Quebrar biscoito
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems:'center',
    justifyContent:'center',
  },
  img: {
    width: 250,
    height: 250,
  },
  textoFrase:{
     fontSize:20,
     color: '#dd7b22',
     margin: 30,
     fontStyle: 'italic',
     textAlign:'center',
  },
  botao:{
    width: 230,
    height: 50,
    borderWidth: 2,
    borderColor: '#dd7b22',
    borderRadius:25,
  },
  btnArea:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnTexto:{
    fontSize:18,
    fontWeight: 'bold',
    color: '#dd7b22',
  }
});


export default App;