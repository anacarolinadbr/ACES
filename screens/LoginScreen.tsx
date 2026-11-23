import { StatusBar } from 'expo-status-bar';
import type { RootStackParamList } from '../types/navigation';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;

import {View, Text, TextInput, Image, TouchableOpacity,  StyleSheet, Platform} from 'react-native';
import { SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';

export default function ({ navigation }: Props) {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <StatusBar style="dark" />
          <View style={styles.conteudo}>

            <View style={styles.logo}>
              <Image
                source={require('../assets/logo.png')}
                style={styles.imagemLogo}
                resizeMode="contain"
              />
            </View>
            <View style={styles.boasVindas}>
              <Text style={styles.titulo}>
                Seja bem-vindo!
              </Text>

              <Text style={styles.subtitulo}>
                Insira as informações de sua{'\n'}
                conta para entrar
              </Text>
            </View>
            <View style={styles.formulario}>
              <Text style={styles.login}>
                Login
              </Text>

              <TextInput
                style={styles.input}
                placeholder="E-mail ou número de telefone"
                placeholderTextColor="#777777"
                keyboardType="email-address"
                autoCapitalize="none"
              />

              <TextInput
                style={styles.input}
                placeholder="Digite sua senha"
                placeholderTextColor="#777777"
                secureTextEntry={true}
              />

              <TouchableOpacity onPress={() => navigation.navigate('EsqueciSenha')}>
                <Text style={styles.esqueciSenha}>
                  Esqueci minha senha
                </Text>
              </TouchableOpacity>

            </View>

            <View style={styles.rodape}>
              <TouchableOpacity style={styles.botao}>
                <Text style={styles.textoBotao}> Entrar
                </Text>
              </TouchableOpacity>

              <View style={styles.cadastro}>
                <Text style={styles.textoCadastro}>
                  Não tem uma conta?
              </Text>



              <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
                <Text style={styles.linkCadastro}>
                  Cadastre-se
                </Text>
              </TouchableOpacity>
                </View>
            </View>

          </View>

      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  conteudo: {
    flex: 1,
    padding: 20,
    justifyContent: 'space-between',
  },

  logo: {
    flex: 1.4,
    alignItems: 'center',
    justifyContent: 'center',
  },

  imagemLogo: {
    width: '100%',
    height: '100%',
  },

  boasVindas: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  titulo: {
    fontSize: 30,
    color: '#087F75',
    fontWeight: '600',
    marginBottom: 8,
  },

  subtitulo: {
    fontSize: 17,
    color: '#555555',
    textAlign: 'center',
    lineHeight: 23,
  },

  formulario: {
    flex: 1.3,
    justifyContent: 'center',
  },

  login: {
    fontSize: 25,
    color: '#444444',
    textAlign: 'center',
    marginBottom: 12,  },

  input: {
    width: '100%',
    height: 52,
    borderWidth: 2,
    borderColor: '#E0E0E0',
    borderRadius: 10,
    paddingHorizontal: 10,
    fontSize: 16,
    marginBottom: 12,
    
  },

  esqueciSenha: {
    fontSize: 16,
    color: '#0c0b0b',
  },

  rodape: {
    flex: 0.8,
    justifyContent: 'center',
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
    fontSize: 19,
    fontWeight: 'bold',
  },

  cadastro: {
    alignItems: 'center',
    marginTop: 14,
  },

  textoCadastro: {
    fontSize: 15,
    color: '#333333',
  },

  linkCadastro: {
    fontSize: 19,
    color: '#009999',
    marginTop: 5,
     fontWeight: 'bold',
  },

});
