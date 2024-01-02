import {View, Text, StyleSheet, Button} from 'react-native';

export default function TabuadaDo8({navigation}){
    return(
        <View style={styles.container}>
            <Text style={styles.paragrafos}>8 x 1 = 8</Text>
            <Text style={styles.paragrafos}>8 x 2 = 16</Text>
            <Text style={styles.paragrafos}>8 x 3 = 24</Text>
            <Text style={styles.paragrafos}>8 x 4 = 32</Text>
            <Text style={styles.paragrafos}>8 x 5 = 40</Text>
            <Text style={styles.paragrafos}>8 x 6 = 48</Text>
            <Text style={styles.paragrafos}>8 x 7 = 56</Text>
            <Text style={styles.paragrafos}>8 x 8 = 64</Text>
            <Text style={styles.paragrafos}>8 x 9 = 72</Text>
            <Text style={styles.paragrafos}>8 x 10 = 80</Text>

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