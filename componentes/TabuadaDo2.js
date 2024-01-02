import {View, Text, StyleSheet, Button} from 'react-native';

export default function TabuadaDo2({navigation}){
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