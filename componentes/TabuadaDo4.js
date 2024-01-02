import {View, Text, StyleSheet, Button} from 'react-native';

export default function TabuadaDo4({navigation}){
    return(
        <View style={styles.container}>
            <Text style={styles.paragrafos}>4 x 1 = 4</Text>
            <Text style={styles.paragrafos}>4 x 2 = 8</Text>
            <Text style={styles.paragrafos}>4 x 3 = 12</Text>
            <Text style={styles.paragrafos}>4 x 4 = 16</Text>
            <Text style={styles.paragrafos}>4 x 5 = 20</Text>
            <Text style={styles.paragrafos}>4 x 6 = 24</Text>
            <Text style={styles.paragrafos}>4 x 7 = 28</Text>
            <Text style={styles.paragrafos}>4 x 8 = 32</Text>
            <Text style={styles.paragrafos}>4 x 9 = 36</Text>
            <Text style={styles.paragrafos}>4 x 10 = 40</Text>

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