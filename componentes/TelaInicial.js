import {StyleSheet, Text, View, Button} from 'react-native';

export default function TelaInicial({navigation}) {
    return (
      <View style={styles.container}>
        <Text style={styles.titulo}>Tabuadas</Text>

        <View style={styles.botaoTelaInicial}>
            <Button
                title='Tabuada do 1'
                color='#000000'
                onPress={()=> navigation.navigate('Tabuada do 1')}
            />
        </View>

        <View style={styles.botaoTelaInicial}>
            <Button
                title='Tabuada do 2'
                color='#000000'
                onPress={()=> navigation.navigate('Tabuada do 2')}
            />
        </View>
        
        <View style={styles.botaoTelaInicial}>
            <Button
                title='Tabuada do 3'
                color='#000000'
                onPress={()=> navigation.navigate('Tabuada do 3')}
            />
        </View>
        
        <View style={styles.botaoTelaInicial}>
            <Button
                title='Tabuada do 4'
                color='#000000'
                onPress={()=> navigation.navigate('Tabuada do 4')}
            />
        </View>
        
        <View style={styles.botaoTelaInicial}>
            <Button
                title='Tabuada do 5'
                color='#000000'
                onPress={()=> navigation.navigate('Tabuada do 5')}
            />
        </View>

        <View style={styles.botaoTelaInicial}>
            <Button
                title='Tabuada do 6'
                color='#000000'
                onPress={()=> navigation.navigate('Tabuada do 6')}
            />
        </View>

        <View style={styles.botaoTelaInicial}>
            <Button
                title='Tabuada do 7'
                color='#000000'
                onPress={()=> navigation.navigate('Tabuada do 7')}
            />
        </View>

        <View style={styles.botaoTelaInicial}>
            <Button
                title='Tabuada do 8'
                color='#000000'
                onPress={()=> navigation.navigate('Tabuada do 8')}
            />
        </View>

        <View style={styles.botaoTelaInicial}>
            <Button
                title='Tabuada do 9'
                color='#000000'
                onPress={()=> navigation.navigate('Tabuada do 9')}
            />
        </View>

        <View style={styles.botaoTelaInicial}>
            <Button
                title='Tabuada do 10'
                color='#000000'
                onPress={()=> navigation.navigate('Tabuada do 10')}
            />
        </View>


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