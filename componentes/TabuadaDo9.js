import {View, Text, StyleSheet, Button} from 'react-native';

export default function TabuadaDo9({navigation}){
    return(
        <View style={styles.container}>
            <Text style={styles.paragrafos}>9 x 1 = 9</Text>
            <Text style={styles.paragrafos}>9 x 2 = 18</Text>
            <Text style={styles.paragrafos}>9 x 3 = 27</Text>
            <Text style={styles.paragrafos}>9 x 4 = 36</Text>
            <Text style={styles.paragrafos}>9 x 5 = 45</Text>
            <Text style={styles.paragrafos}>9 x 6 = 54</Text>
            <Text style={styles.paragrafos}>9 x 7 = 63</Text>
            <Text style={styles.paragrafos}>9 x 8 = 72</Text>
            <Text style={styles.paragrafos}>9 x 9 = 81</Text>
            <Text style={styles.paragrafos}>9 x 10 = 90</Text>

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