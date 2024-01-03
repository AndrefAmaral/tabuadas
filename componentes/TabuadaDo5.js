import {View, Text, StyleSheet} from 'react-native';

import BotaoVoltar from './BotaoVoltar';

const TabuadaDo5 = ({navigation}) => {
    
    const voltarParaTelaInicial = () => {
        navigation.goBack()
    }

    return(
        <View style={styles.container}>
            <Text style={styles.paragrafos}>5 x 1 = 5</Text>
            <Text style={styles.paragrafos}>5 x 2 = 10</Text>
            <Text style={styles.paragrafos}>5 x 3 = 15</Text>
            <Text style={styles.paragrafos}>5 x 4 = 20</Text>
            <Text style={styles.paragrafos}>5 x 5 = 25</Text>
            <Text style={styles.paragrafos}>5 x 6 = 30</Text>
            <Text style={styles.paragrafos}>5 x 7 = 35</Text>
            <Text style={styles.paragrafos}>5 x 8 = 40</Text>
            <Text style={styles.paragrafos}>5 x 9 = 45</Text>
            <Text style={styles.paragrafos}>5 x 10 = 50</Text>

            <BotaoVoltar
                label='Voltar'
                aoClicar={voltarParaTelaInicial}
            />
        </View>
    );
}

export default TabuadaDo5;

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