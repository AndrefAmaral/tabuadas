import {View, Text, StyleSheet} from 'react-native';

import BotaoVoltar from './BotaoVoltar';

const TabuadaDo10 = ({navigation}) => {
   
    const voltarParaTelaInicial = () => {
        navigation.goBack()
    }

    return(
        <View style={styles.container}>
            <Text style={styles.paragrafos}>10 x 1 = 10</Text>
            <Text style={styles.paragrafos}>10 x 2 = 20</Text>
            <Text style={styles.paragrafos}>10 x 3 = 30</Text>
            <Text style={styles.paragrafos}>10 x 4 = 40</Text>
            <Text style={styles.paragrafos}>10 x 5 = 50</Text>
            <Text style={styles.paragrafos}>10 x 6 = 60</Text>
            <Text style={styles.paragrafos}>10 x 7 = 70</Text>
            <Text style={styles.paragrafos}>10 x 8 = 80</Text>
            <Text style={styles.paragrafos}>10 x 9 = 90</Text>
            <Text style={styles.paragrafos}>10 x 10 = 100</Text>

            <BotaoVoltar
                label='Voltar'
                aoClicar={voltarParaTelaInicial}
            />
        </View>
    );
}

export default TabuadaDo10;

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