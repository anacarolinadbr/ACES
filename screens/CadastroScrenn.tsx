import {View,Text,Image,TouchableOpacity,TextInput,StyleSheet,ScrollView,} from 'react-native';

import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../types/navigation';

type Props = NativeStackScreenProps<RootStackParamList, 'Cadastro'>;

export default function CadastroScreen({ navigation }: Props) {

  return (
    <View style={styles.container}>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.conteudo}
      >

        <View style={styles.logo}>
          <Image
            source={require('../assets/logo.png')}
            style={styles.imagemLogo}
            resizeMode="contain"
          />
        </View>

        <View style={styles.tituloArea}>
          <Text style={styles.titulo}>Realize seu Cadastro</Text>
          <Text style={styles.subtitulo}>
            Preencha suas informações
          </Text>
        </View>
        <View style={styles.secao}>

          <Text style={styles.tituloSecao}>
            Informações pessoais
          </Text>
          
<Text style={styles.label}>Nome completo</Text>
<TextInput
  style={styles.input}
  placeholder="Digite seu nome completo"
/>

<Text style={styles.label}>Idade</Text>
<TextInput
  style={styles.input}
  placeholder="Digite sua idade"
  keyboardType="numeric"
/>

<Text style={styles.label}>Número de telefone</Text>
<TextInput
  style={styles.input}
  placeholder="Digite seu número"
  keyboardType="phone-pad"
/>

<Text style={styles.label}>E-mail</Text>
<TextInput
  style={styles.input}
  placeholder="Digite seu e-mail"
  keyboardType="email-address"
/>
        </View>

        <View style={styles.secao}>

          <Text style={styles.tituloSecao}>
            Informações médicas
          </Text>

          <Text style={styles.label}>Tipo sanguíneo</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite seu tipo sanguíneo"
          />

          <Text style={styles.label}>Alergias</Text>
          <TextInput
            style={styles.input}
            placeholder="Informe se possui alergias"
          />

          <Text style={styles.label}>Doenças preexistentes</Text>
          <TextInput
            style={styles.input}
            placeholder="Informe suas condições de saúde"
          />

          <Text style={styles.label}>Medicamentos utilizados</Text>
          <TextInput
            style={styles.input}
            placeholder="Informe seus medicamentos"
          />

        </View>
        <View style={styles.secao}>

          <Text style={styles.tituloSecao}>
            Localização
          </Text>

          <Text style={styles.label}>CEP</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite seu CEP"
            keyboardType="numeric"
          />

          <Text style={styles.label}>Rua</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite o nome da rua"
          />

          <Text style={styles.label}>Número</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite o número da sua Residencia"
            keyboardType="numeric"
          />

          <Text style={styles.label}>Bairro</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite seu bairro"
          />

          <Text style={styles.label}>Cidade</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite sua cidade"
          />

          <Text style={styles.label}>Estado</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite seu estado"
          />

        </View>

        <View style={styles.final}>

          <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('Senha')}>
            <Text style={styles.textoBotao}>
              Confirmar cadastro
            </Text>
          </TouchableOpacity>

          <View style={styles.login}>
            <Text style={styles.textoLogin}>
              Já possui uma conta?
            </Text>

            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Text style={styles.linkLogin}>Logar</Text>
            </TouchableOpacity>

            
          </View>

        </View>

      </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  conteudo: {
    
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },

  logo: {
    height: 120,
    alignItems: 'center',
    justifyContent: 'center',
  },

  imagemLogo: {
    width: '75%',
    height: '100%',
  },

  tituloArea: {
    alignItems: 'center',
    marginVertical: 20,
  },

  titulo: {
    fontWeight: 'bold',
    fontSize: 24,
    color: '#087F75',
    
  },

  subtitulo: {
    fontSize: 17,
    color: '#444444',
    marginTop: 5,
  },

  secao: {
    marginBottom: 25,
  },

  tituloSecao: {
    fontSize: 20,
    color: '#087F75',
    fontWeight: 'bold',
    marginBottom: 15,
  },

  label: {
    fontSize: 16,
    color: '#333333',
    fontWeight: '500',
    marginBottom: 7,
    marginTop: 12,
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

  final: {
    marginTop: 10,
    marginBottom: 20,
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

  login: {
    alignItems: 'center',
    marginTop: 18,
  },

  textoLogin: {
    fontSize: 16,
    color: '#222222',  },

  linkLogin: {
    fontSize: 19,
    color: '#009999',
    marginTop: 5,
        fontWeight: 'bold',

  },
  

});
