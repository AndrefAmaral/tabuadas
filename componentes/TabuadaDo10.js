import {View, Text, StyleSheet, Button} from 'react-native';

export default function TabuadaDo10({navigation}){
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