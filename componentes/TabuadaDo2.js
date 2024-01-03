import {View, Text, StyleSheet} from 'react-native';

import BotaoVoltar from './BotaoVoltar';

const TabuadaDo2 = ({navigation}) => {
    
    const voltarParaTelaInicial = () => {
        navigation.goBack()
    }

    return(
        <View style={styles.container}>
            <Text style={styles.paragrafos}>2 x 1 = 2</Text>
            <Text style={styles.paragrafos}>2 x 2 = 4</Text>
            <Text style={styles.paragrafos}>2 x 3 = 6</Text>
            <Text style={styles.paragrafos}>2 x 4 = 8</Text>
            <Text style={styles.paragrafos}>2 x 5 = 10</Text>
            <Text style={styles.paragrafos}>2 x 6 = 12</Text>
            <Text style={styles.paragrafos}>2 x 7 = 14</Text>
            <Text style={styles.paragrafos}>2 x 8 = 16</Text>
            <Text style={styles.paragrafos}>2 x 9 = 18</Text>
            <Text style={styles.paragrafos}>2 x 10 = 20</Text>

            <BotaoVoltar
                label='Voltar'
                aoClicar={voltarParaTelaInicial}
            />
        </View>
    );
}

export default TabuadaDo2;

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