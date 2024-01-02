import {View, Text, StyleSheet, Button} from 'react-native';

export default function TabuadaDo6({navigation}){
    return(
        <View style={styles.container}>
            <Text style={styles.paragrafos}>6 x 1 = 6</Text>
            <Text style={styles.paragrafos}>6 x 2 = 12</Text>
            <Text style={styles.paragrafos}>6 x 3 = 18</Text>
            <Text style={styles.paragrafos}>6 x 4 = 24</Text>
            <Text style={styles.paragrafos}>6 x 5 = 30</Text>
            <Text style={styles.paragrafos}>6 x 6 = 36</Text>
            <Text style={styles.paragrafos}>6 x 7 = 42</Text>
            <Text style={styles.paragrafos}>6 x 8 = 48</Text>
            <Text style={styles.paragrafos}>6 x 9 = 54</Text>
            <Text style={styles.paragrafos}>6 x 10 = 60</Text>

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