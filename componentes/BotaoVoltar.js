import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const BotaoVoltar = ({label, aoClicar}) => {
    return(
        <View>
            <TouchableOpacity style={styles.botao} onPress={aoClicar}>
                <Text style={styles.textoBotao}>{label}</Text>
            </TouchableOpacity>
        </View>
    );
}

export default BotaoVoltar;

const styles = StyleSheet.create({
    botao: {
        backgroundColor: '#000000',
        marginTop: 40,
        padding: 10,
        textTransform: 'uppercase'
    },
    textoBotao: {
        color: '#ffffff'
    }
})