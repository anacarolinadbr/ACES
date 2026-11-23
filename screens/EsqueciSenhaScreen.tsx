import { View, Text,Image, TextInput,TouchableOpacity, StyleSheet } from 'react-native';

import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../types/navigation';

type Props = NativeStackScreenProps<RootStackParamList, 'EsqueciSenha'>;

export default function EsqueciSenhaScreen({ navigation }: Props) {

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
          Esqueceu sua senha?
        </Text>

        <Text style={styles.subtitulo}>
          Por favor verifique o seu e-mail vinculado
          à sua conta para poder redefinir a senha
        </Text>
      </View>

      <View style={styles.codigo}>

        <TextInput
          style={styles.caixa}
          keyboardType="numeric"
          maxLength={1}
          textAlign="center"
        />

        <TextInput
          style={styles.caixa}
          keyboardType="numeric"
          maxLength={1}
          textAlign="center"
        />

        <TextInput
          style={styles.caixa}
          keyboardType="numeric"
          maxLength={1}
          textAlign="center"
        />

        <TextInput
          style={styles.caixa}
          keyboardType="numeric"
          maxLength={1}
          textAlign="center"
        />

      </View>

      <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('RedefinirSenha')}>
        <Text style={styles.textoBotao}>
          Confirmar
        </Text>
      </TouchableOpacity>
{/* 
      <View style={styles.reenviar}>
        <Text style={styles.textoReenviar}>
          Não recebeu o código?
        </Text>

        <TouchableOpacity>
          <Text style={styles.linkReenviar}>
            Enviar novamente
          </Text>
        </TouchableOpacity>
      </View>*/}

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 25,
    paddingTop: 25,
  },

  logo: {
    height: 210,
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
  },

  titulo: {
    fontSize: 23,
    color: '#087F75',
    fontWeight: 'bold',
  },

  subtitulo: {
    fontSize: 18,
    color: '#444444',
    textAlign: 'center',
    marginTop: 8,
  },

  codigo: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
    marginTop: 65,
  },

  caixa: {
    width: 50,
    height: 60,
    borderWidth: 2,
    borderColor: '#060606',
    borderRadius: 5,
    fontSize: 20,
  },

  botao: {
    width: '90%',
    height: 45,
    backgroundColor: '#00A3A3',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 22,
  },

  textoBotao: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },

  reenviar: {
    alignItems: 'center',
    marginTop: 10,
  },

  textoReenviar: {
    fontSize: 14,
    color: '#333333',
  },

  linkReenviar: {
    fontSize: 17,
    color: '#009999',
     fontWeight: 'bold',
  },

});
