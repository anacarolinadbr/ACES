import { View, Text, Image, TouchableOpacity, TextInput, StyleSheet } from 'react-native';

import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../types/navigation';

type Props = NativeStackScreenProps<RootStackParamList, 'Senha'>;

export default function SenhaScreen({ navigation }: Props) {

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
        <Text style={styles.titulo}>Crie sua senha</Text>

        <Text style={styles.subtitulo}>
          Estamos quase finalizando seu cadastro!
        </Text>
      </View>

      <View style={styles.formulario}>

        <Text style={styles.label}>Senha</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite sua senha"
          secureTextEntry
        />

        <Text style={styles.label}>Confirmar senha</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite sua senha novamente"
          secureTextEntry
        />

        <Text style={styles.aviso}>
          Sua senha deve ter pelo menos 8 caracteres.
        </Text>

      </View>

      <View style={styles.final}>

        <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('SenhaRedefinida')}>
          <Text style={styles.textoBotao}>
             Finalizar cadastro
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.linkVoltar}>
            Voltar
          </Text>
        </TouchableOpacity>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    paddingVertical: 20,
    justifyContent: 'space-between',
  },

  logo: {
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
  },

  imagemLogo: {
    width: '75%',
    height: '100%',
  },

  tituloArea: {
    alignItems: 'center',
  },

  titulo: {
    fontSize: 30,
    color: '#087F75',
    fontWeight: 'bold',
  },

  subtitulo: {
    fontSize: 18,
    color: '#444444',
    marginTop: 8,
    textAlign: 'center',
  },

  formulario: {
    marginTop: 20,
  },

  label: {
    fontSize: 16,
    color: '#333333',
    fontWeight: '500',
    marginBottom: 7,
    marginTop: 15,
  },

  input: {
    width: '100%',
    height: 52,
    borderWidth: 1,
    borderColor: '#BBBBBB',
    borderRadius: 6,
    paddingHorizontal: 14,
    fontSize: 16,
    color: '#333333',
    backgroundColor: '#FFFFFF',
  },

  aviso: {
    fontSize: 15,
    marginTop: 12,
  },

  final: {
    marginBottom: 20,
    alignItems: 'center',
  },

  botao: {
    width: '100%',
    height: 52,
    backgroundColor: '#00A3A3',
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },

  textoBotao: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },

  linkVoltar: {
    fontSize: 17,
    color: '#009999',
    fontWeight: 'bold',
    marginTop: 18,
  },

});
