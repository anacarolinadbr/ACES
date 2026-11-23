import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';


import LoginScreen from './screens/LoginScreen';
import CadastroScreen from './screens/CadastroScrenn';
import SenhaScreen from './screens/SenhaScreen';
import EsqueciSenhaScreen from './screens/EsqueciSenhaScreen';
import SenhaRedefinidaScreen from './screens/SenhaRedefinida';
import RedefinirSenhaScreen from './screens/RedefinirSenhaScreen';



import type { RootStackParamList } from './types/navigation';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="Cadastro"
            component={CadastroScreen}
            options={{ headerShown: false }}
          />
<Stack.Screen
  name="Senha"
  component={SenhaScreen}
  options={{ headerShown: false }}
/>

<Stack.Screen
  name="EsqueciSenha"
  component={EsqueciSenhaScreen}
  options={{ headerShown: false }}
/>

<Stack.Screen
  name="RedefinirSenha"
  component={RedefinirSenhaScreen}
  options={{ headerShown: false }}
/>

<Stack.Screen
  name="SenhaRedefinida"
  component={SenhaRedefinidaScreen}
  options={{ headerShown: false }}
/>

        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}