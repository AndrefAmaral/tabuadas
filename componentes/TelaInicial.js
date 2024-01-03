import {StyleSheet, Text, View } from 'react-native';

import BotaoTelaInicial from './BotaoTelaInicial.js'; 

export default function TelaInicial({navigation}) {
    
    const navegarParaTelaDo1 = () => {
        navigation.navigate('Tabuada do 1')
    }
    const navegarParaTelaDo2 = () => {
        navigation.navigate('Tabuada do 2')
    }
    const navegarParaTelaDo3 = () => {
        navigation.navigate('Tabuada do 3')
    }
    const navegarParaTelaDo4 = () => {
        navigation.navigate('Tabuada do 4')
    }
    const navegarParaTelaDo5 = () => {
        navigation.navigate('Tabuada do 5')
    }
    const navegarParaTelaDo6 = () => {
        navigation.navigate('Tabuada do 6')
    }
    const navegarParaTelaDo7 = () => {
        navigation.navigate('Tabuada do 7')
    }
    const navegarParaTelaDo8 = () => {
        navigation.navigate('Tabuada do 8')
    }
    const navegarParaTelaDo9 = () => {
        navigation.navigate('Tabuada do 9')
    }
    const navegarParaTelaDo10 = () => {
        navigation.navigate('Tabuada do 10')
    }
    
    return (
      <View style={styles.container}>
        <Text style={styles.titulo}>Tabuadas</Text>

        <BotaoTelaInicial
            label='Tabuada do 1'
            aoClicar={navegarParaTelaDo1} 
        />
        <BotaoTelaInicial
            label='Tabuada do 2'
            aoClicar={navegarParaTelaDo2} 
        />
        <BotaoTelaInicial
            label='Tabuada do 3'
            aoClicar={navegarParaTelaDo3} 
        />
        <BotaoTelaInicial
            label='Tabuada do 4'
            aoClicar={navegarParaTelaDo4} 
        />
        <BotaoTelaInicial
            label='Tabuada do 5'
            aoClicar={navegarParaTelaDo5} 
        />
        <BotaoTelaInicial
            label='Tabuada do 6'
            aoClicar={navegarParaTelaDo6} 
        />
        <BotaoTelaInicial
            label='Tabuada do 7'
            aoClicar={navegarParaTelaDo7} 
        />
        <BotaoTelaInicial
            label='Tabuada do 8'
            aoClicar={navegarParaTelaDo8} 
        />
        <BotaoTelaInicial
            label='Tabuada do 9'
            aoClicar={navegarParaTelaDo9} 
        />
        <BotaoTelaInicial
            label='Tabuada do 10'
            aoClicar={navegarParaTelaDo10} 
        />
       
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
    },
    titulo: {
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 15
    },
    botaoTelaInicial: {
        marginBottom: 20
    }
  });