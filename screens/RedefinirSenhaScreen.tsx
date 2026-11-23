
import { View, Text, Image,TouchableOpacity,TextInput,StyleSheet } from 'react-native';

import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../types/navigation';

import SenhaRedefinidaScreen from '../screens/SenhaRedefinida';
type Props = NativeStackScreenProps<RootStackParamList, 'RedefinirSenha'>;


export default function RedefinirSenhaScreen({ navigation }: Props) {

  return (
    <View style={styles.container}>

      <View style={styles.logo}>
        <Image
          source={require('../assets/logo.png')}
          style={styles.imagemLogo}
          resizeMode="contain"
        />
      </View>

      <View style={styles.tituloArea}>
        <Text style={styles.titulo}>
          Redefinir Senha
        </Text>
      </View>

      <View style={styles.formulario}>

        <TextInput
          style={styles.input}
          placeholder="Nova senha"
          secureTextEntry
        />

        <TextInput
          style={styles.input}
          placeholder="Confirmar senha"
          secureTextEntry
        />

      </View>

      <TouchableOpacity
        style={styles.botao}
        onPress={() => navigation.navigate('SenhaRedefinida')}
      >
        <Text style={styles.textoBotao}>
          Alterar Senha
        </Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 22,
    paddingTop: 35,
  },

  logo: {
    height: 130,
    alignItems: 'center',
    justifyContent: 'center',
  },

  imagemLogo: {
    width: '65%',
    height: '100%',
  },

  tituloArea: {
    alignItems: 'center',
    marginTop: 65,
    marginBottom: 30,
  },

  titulo: {
    fontSize: 23,
    color: '#087F75',
    fontWeight: 'bold',
  },

  formulario: {
    gap: 12,
  },

  input: {
    width: '100%',
    height: 52,
    borderWidth: 2,
    borderColor: '#E0E0E0',
    borderRadius: 10,
    paddingHorizontal: 10,
    fontSize: 16,
    

  },

  botao: {
    width: '100%',
    height: 45,
    backgroundColor: '#00A3A3',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 32,
  },

  textoBotao: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },

});
