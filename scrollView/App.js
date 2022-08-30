import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ScrollView } from 'react-native';
import React, {Component} from 'react';

class App extends Component{
  render(){
    return(
      <View style={styles.container}>
        {/* Tudo dentro do ScrollView da para scrolar
        showsVerticalScrollIndicator={false} - Retira a barra do scroll lateral Vertical
        scrollEnabled={false} - Impede que haja a rolagem
        horizontal={true} - Adiciona rolamento horizontal
        showsHorizontalScrollIndicator={false} - Retira a barra do scroll lateral horizontal
        */}

        <ScrollView >
          <View style={styles.box1}></View>
          <View style={styles.box2}></View>
          <View style={styles.box3}></View>
          <View style={styles.box4}></View>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  box1:{
    backgroundColor: 'red',
    height: 250,
  },  
  box2:{
    backgroundColor: 'green',
    height: 250,

  },  
  box3:{
    backgroundColor: 'yellow',
    height: 250,

  }, 
  box4:{
    backgroundColor: 'blue',
    height: 250,

  },
});

export default App;