import {View, Text, StyleSheet, Button} from 'react-native';

export default function TabuadaDo3({navigation}){
    return(
        <View style={styles.container}>
            <Text style={styles.paragrafos}>3 x 1 = 3</Text>
            <Text style={styles.paragrafos}>3 x 2 = 6</Text>
            <Text style={styles.paragrafos}>3 x 3 = 9</Text>
            <Text style={styles.paragrafos}>3 x 4 = 12</Text>
            <Text style={styles.paragrafos}>3 x 5 = 15</Text>
            <Text style={styles.paragrafos}>3 x 6 = 18</Text>
            <Text style={styles.paragrafos}>3 x 7 = 21</Text>
            <Text style={styles.paragrafos}>3 x 8 = 24</Text>
            <Text style={styles.paragrafos}>3 x 9 = 27</Text>
            <Text style={styles.paragrafos}>3 x 10 = 30</Text>

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