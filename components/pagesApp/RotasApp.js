import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Home from './Home';
import CadastrarBoletim from './CadastrarBoletim';
import AlterarBoletim from './AlterarBoletim';

 

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Ola Marina</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{ headerTintColor: '#9ac234', title: 'Cadastro do Boletim' }} />
      <Stack.Screen name="CadastrarBoletim" component={CadastrarBoletim} options={{ headerTintColor: '#9ac234', title: 'Cadastro do Boletim' }} />
      <Stack.Screen name="AlterarBoletim" component={AlterarBoletim} options={{ headerTintColor: '#9ac234', title: 'Alterar Boletim' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;