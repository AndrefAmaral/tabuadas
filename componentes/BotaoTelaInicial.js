import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const BotaoTelaInicial = ({label, aoClicar}) => {
    return(
        <View>
            <TouchableOpacity style={styles.botao} onPress={aoClicar}>
                <Text style={styles.textoBotao}>{label}</Text>
            </TouchableOpacity>
        </View>
    );
}

export default BotaoTelaInicial;

const styles = StyleSheet.create({
    botao: {
        backgroundColor: '#000000',
        marginBottom: 10,
        padding: 10,
        textTransform: 'uppercase'
    },
    textoBotao: {
        color: '#ffffff'
    }
})