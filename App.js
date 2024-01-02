import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import TelaInicial from './componentes/TelaInicial';
import TabuadaDo1 from './componentes/TabuadaDo1';
import TabuadaDo2 from './componentes/TabuadaDo2';
import TabuadaDo3 from './componentes/TabuadaDo3';
import TabuadaDo4 from './componentes/TabuadaDo4';
import TabuadaDo5 from './componentes/TabuadaDo5';
import TabuadaDo6 from './componentes/TabuadaDo6';
import TabuadaDo7 from './componentes/TabuadaDo7';
import TabuadaDo8 from './componentes/TabuadaDo8';
import TabuadaDo9 from './componentes/TabuadaDo9';
import TabuadaDo10 from './componentes/TabuadaDo10';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Tela inicial'>
        <Stack.Screen name='Tela Inicial' component={TelaInicial} options={{title:'Tela Inicial'}}/>
        <Stack.Screen name='Tabuada do 1' component={TabuadaDo1} options={{title:'Tabuada do 1'}}/>
        <Stack.Screen name='Tabuada do 2' component={TabuadaDo2} options={{title:'Tabuada do 2'}}/>
        <Stack.Screen name='Tabuada do 3' component={TabuadaDo3} options={{title:'Tabuada do 3'}}/>
        <Stack.Screen name='Tabuada do 4' component={TabuadaDo4} options={{title:'Tabuada do 4'}}/>
        <Stack.Screen name='Tabuada do 5' component={TabuadaDo5} options={{title:'Tabuada do 5'}}/>
        <Stack.Screen name='Tabuada do 6' component={TabuadaDo6} options={{title:'Tabuada do 6'}}/>
        <Stack.Screen name='Tabuada do 7' component={TabuadaDo7} options={{title:'Tabuada do 7'}}/>
        <Stack.Screen name='Tabuada do 8' component={TabuadaDo8} options={{title:'Tabuada do 8'}}/>
        <Stack.Screen name='Tabuada do 9' component={TabuadaDo9} options={{title:'Tabuada do 9'}}/>
        <Stack.Screen name='Tabuada do 10' component={TabuadaDo10} options={{title:'Tabuada do 10'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

