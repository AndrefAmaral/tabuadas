import {View, Text, StyleSheet, Button} from 'react-native';

export default function TabuadaDo7({navigation}){
    return(
        <View style={styles.container}>
            <Text style={styles.paragrafos}>7 x 1 = 7</Text>
            <Text style={styles.paragrafos}>7 x 2 = 14</Text>
            <Text style={styles.paragrafos}>7 x 3 = 21</Text>
            <Text style={styles.paragrafos}>7 x 4 = 28</Text>
            <Text style={styles.paragrafos}>7 x 5 = 35</Text>
            <Text style={styles.paragrafos}>7 x 6 = 42</Text>
            <Text style={styles.paragrafos}>7 x 7 = 49</Text>
            <Text style={styles.paragrafos}>7 x 8 = 56</Text>
            <Text style={styles.paragrafos}>7 x 9 = 63</Text>
            <Text style={styles.paragrafos}>7 x 10 = 70</Text>

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