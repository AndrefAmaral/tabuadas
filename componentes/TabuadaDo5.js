import {View, Text, StyleSheet, Button} from 'react-native';

export default function TabuadaDo5({navigation}){
    return(
        <View style={styles.container}>
            <Text style={styles.paragrafos}>5 x 1 = 5</Text>
            <Text style={styles.paragrafos}>5 x 2 = 10</Text>
            <Text style={styles.paragrafos}>5 x 3 = 15</Text>
            <Text style={styles.paragrafos}>5 x 4 = 20</Text>
            <Text style={styles.paragrafos}>5 x 5 = 25</Text>
            <Text style={styles.paragrafos}>5 x 6 = 30</Text>
            <Text style={styles.paragrafos}>5 x 7 = 35</Text>
            <Text style={styles.paragrafos}>5 x 8 = 40</Text>
            <Text style={styles.paragrafos}>5 x 9 = 45</Text>
            <Text style={styles.paragrafos}>5 x 10 = 50</Text>

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