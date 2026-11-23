
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../types/navigation';

type Props = NativeStackScreenProps<RootStackParamList, 'SenhaRedefinida'>;

export default function SenhaSucessoScreen({ navigation }: Props) {

  return (
    <View style={styles.container}>

      <View style={styles.logo}>
        <Image
          source={require('../assets/logo.png')}
          style={styles.imagemLogo}
          resizeMode="contain"
        />
      </View>

      <View style={styles.mensagem}>
        <Text style={styles.titulo}>
          Sua senha foi definida com
  sucesso!
        </Text>
      </View>

      <View style={styles.final}>
        <TouchableOpacity
          style={styles.botao}
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.textoBotao}>
            Continuar
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
    paddingHorizontal: 15,
    paddingVertical: 20,
  },

  logo: {
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },

  imagemLogo: {
    width: '75%',
    height: '100%',
  },

  mensagem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 15,
  },

  titulo: {
    fontSize: 21,
    color: '#087F75',
    fontWeight: 'bold',
    textAlign: 'center',
  },

  final: {
    marginBottom: 8,
  },

  botao: {
    width: '100%',
    height: 39,
    backgroundColor: '#00A3A3',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },

  textoBotao: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },

});
