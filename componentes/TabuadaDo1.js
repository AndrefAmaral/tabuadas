import {View, Text, StyleSheet, Button} from 'react-native';

export default function TabuadaDo1({navigation}){
    return(
        <View style={styles.container}>
            <Text style={styles.paragrafos}>1 x 1 = 1</Text>
            <Text style={styles.paragrafos}>1 x 2 = 2</Text>
            <Text style={styles.paragrafos}>1 x 3 = 3</Text>
            <Text style={styles.paragrafos}>1 x 4 = 4</Text>
            <Text style={styles.paragrafos}>1 x 5 = 5</Text>
            <Text style={styles.paragrafos}>1 x 6 = 6</Text>
            <Text style={styles.paragrafos}>1 x 7 = 7</Text>
            <Text style={styles.paragrafos}>1 x 8 = 8</Text>
            <Text style={styles.paragrafos}>1 x 9 = 9</Text>
            <Text style={styles.paragrafos}>1 x 10 = 10</Text>

            <View style={styles.botao}>
                <Button
                    title='Voltar'
                    color='#000000'
                    onPress={()=> navigation.goBack()}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    paragrafos: {
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 7
    },
    botao: {
        marginTop: 40
    }
})