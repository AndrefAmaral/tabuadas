import {View, Text, StyleSheet} from 'react-native';

import BotaoVoltar from './BotaoVoltar';

const TabuadaDo8 = ({navigation}) => {

    const voltarParaTelaInicial = () => {
        navigation.goBack()
    }

    return(
        <View style={styles.container}>
            <Text style={styles.paragrafos}>8 x 1 = 8</Text>
            <Text style={styles.paragrafos}>8 x 2 = 16</Text>
            <Text style={styles.paragrafos}>8 x 3 = 24</Text>
            <Text style={styles.paragrafos}>8 x 4 = 32</Text>
            <Text style={styles.paragrafos}>8 x 5 = 40</Text>
            <Text style={styles.paragrafos}>8 x 6 = 48</Text>
            <Text style={styles.paragrafos}>8 x 7 = 56</Text>
            <Text style={styles.paragrafos}>8 x 8 = 64</Text>
            <Text style={styles.paragrafos}>8 x 9 = 72</Text>
            <Text style={styles.paragrafos}>8 x 10 = 80</Text>

            <BotaoVoltar
                label='Voltar'
                aoClicar={voltarParaTelaInicial}
            />
        </View>
    );
}

export default TabuadaDo8;

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