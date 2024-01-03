import {View, Text, StyleSheet} from 'react-native';

import BotaoVoltar from './BotaoVoltar';

const TabuadaDo7 = ({navigation}) => {
    
    const voltarParaTelaInicial = () => {
        navigation.goBack()
    }

    return(
        <View style={styles.container}>
            <Text style={styles.paragrafos}>7 x 1 = 7</Text>
            <Text style={styles.paragrafos}>7 x 2 = 14</Text>
            <Text style={styles.paragrafos}>7 x 3 = 21</Text>
            <Text style={styles.paragrafos}>7 x 4 = 28</Text>
            <Text style={styles.paragrafos}>7 x 5 = 35</Text>
            <Text style={styles.paragrafos}>7 x 6 = 42</Text>
            <Text style={styles.paragrafos}>7 x 7 = 49</Text>
            <Text style={styles.paragrafos}>7 x 8 = 56</Text>
            <Text style={styles.paragrafos}>7 x 9 = 63</Text>
            <Text style={styles.paragrafos}>7 x 10 = 70</Text>

            <BotaoVoltar
                label='Voltar'
                aoClicar={voltarParaTelaInicial}
            /> 
        </View>
    );
}

export default TabuadaDo7;

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