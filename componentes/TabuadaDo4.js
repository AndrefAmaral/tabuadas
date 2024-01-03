import {View, Text, StyleSheet } from 'react-native';

import BotaoVoltar from './BotaoVoltar';

const TabuadaDo4 = ({navigation}) => {
    
    const voltarParaTelaInicial = () => {
        navigation.goBack()
    }
    
    return(
        <View style={styles.container}>
            <Text style={styles.paragrafos}>4 x 1 = 4</Text>
            <Text style={styles.paragrafos}>4 x 2 = 8</Text>
            <Text style={styles.paragrafos}>4 x 3 = 12</Text>
            <Text style={styles.paragrafos}>4 x 4 = 16</Text>
            <Text style={styles.paragrafos}>4 x 5 = 20</Text>
            <Text style={styles.paragrafos}>4 x 6 = 24</Text>
            <Text style={styles.paragrafos}>4 x 7 = 28</Text>
            <Text style={styles.paragrafos}>4 x 8 = 32</Text>
            <Text style={styles.paragrafos}>4 x 9 = 36</Text>
            <Text style={styles.paragrafos}>4 x 10 = 40</Text>

            <BotaoVoltar
                label='Voltar'
                aoClicar={voltarParaTelaInicial}
            />           
        </View>
    );
}
export default TabuadaDo4;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    paragrafos: {
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 7
    }
})