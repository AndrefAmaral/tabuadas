import {View, Text, StyleSheet} from 'react-native';

import BotaoVoltar from './BotaoVoltar';

const TabuadaDo9 = ({navigation}) => {
    
    const voltarParaTelaInicial = () => {
        navigation.goBack()
    }

    return(
        <View style={styles.container}>
            <Text style={styles.paragrafos}>9 x 1 = 9</Text>
            <Text style={styles.paragrafos}>9 x 2 = 18</Text>
            <Text style={styles.paragrafos}>9 x 3 = 27</Text>
            <Text style={styles.paragrafos}>9 x 4 = 36</Text>
            <Text style={styles.paragrafos}>9 x 5 = 45</Text>
            <Text style={styles.paragrafos}>9 x 6 = 54</Text>
            <Text style={styles.paragrafos}>9 x 7 = 63</Text>
            <Text style={styles.paragrafos}>9 x 8 = 72</Text>
            <Text style={styles.paragrafos}>9 x 9 = 81</Text>
            <Text style={styles.paragrafos}>9 x 10 = 90</Text>

            <BotaoVoltar
                label='Voltar'
                aoClicar={voltarParaTelaInicial}
            />
        </View>
    );
}

export default TabuadaDo9;

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