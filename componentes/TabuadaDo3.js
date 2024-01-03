import {View, Text, StyleSheet} from 'react-native';

import BotaoVoltar from './BotaoVoltar';

const TabuadaDo3 = ({navigation}) => {
    
    const voltarParaTelaInicial = () => {
        navigation.goBack()
    }

    return(
        <View style={styles.container}>
            <Text style={styles.paragrafos}>3 x 1 = 3</Text>
            <Text style={styles.paragrafos}>3 x 2 = 6</Text>
            <Text style={styles.paragrafos}>3 x 3 = 9</Text>
            <Text style={styles.paragrafos}>3 x 4 = 12</Text>
            <Text style={styles.paragrafos}>3 x 5 = 15</Text>
            <Text style={styles.paragrafos}>3 x 6 = 18</Text>
            <Text style={styles.paragrafos}>3 x 7 = 21</Text>
            <Text style={styles.paragrafos}>3 x 8 = 24</Text>
            <Text style={styles.paragrafos}>3 x 9 = 27</Text>
            <Text style={styles.paragrafos}>3 x 10 = 30</Text>

            <BotaoVoltar
                label='Voltar'
                aoClicar={voltarParaTelaInicial}
            />
        </View>
    );
}

export default TabuadaDo3;

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