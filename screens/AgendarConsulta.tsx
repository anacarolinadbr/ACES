
import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  Alert,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';

type Props = {
  navigation: any;
};

export default function AgendarConsulta({ navigation }: Props) {

  const [consultas, setConsultas] = useState([
    {
      id: 1,
      sala: '09',
      data: '24/02',
      status: 'Consulta Marcada',
      local: 'UBS Scharlau',
      horario: '17:00',
      medico: 'Dr. Fulano de Tal',
    },
    {
      id: 2,
      sala: '09',
      data: '24/02',
      status: 'Consulta Remarcada',
      local: 'UBS Scharlau',
      horario: '14:30',
      medico: 'Dr. Fulano de Tal',
    },
  ]);

  function cancelarConsulta(id: number) {
    Alert.alert(
      'Cancelar consulta',
      'Deseja realmente cancelar esta consulta?',
      [
        { text: 'Não', style: 'cancel' },
        {
          text: 'Sim, cancelar',
          onPress: () => {
            setConsultas(
              consultas.filter((consulta) => consulta.id !== id)
            );
          },
        },
      ]
    );
  }

  function remarcarConsulta() {
    Alert.alert(
      'Remarcar consulta',
      'Você poderá escolher uma nova data e horário.'
    );
  }

  return (
    <SafeAreaView style={styles.container}>

      {/* Cabeçalho */}
      <View style={styles.cabecalho}>

        <Image
          source={require('../assets/logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />

        <TouchableOpacity
          onPress={() => Alert.alert('Menu', 'Menu do aplicativo')}
        >
          <Ionicons name="menu-outline" size={36} color="#000" />
        </TouchableOpacity>

      </View>

      {/* Conteúdo */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.conteudo}
      >

        {/* Botão agendar */}
        <TouchableOpacity
          style={styles.botaoAgendar}
          onPress={() => navigation.navigate('AgendarConsulta2')}
        >
          <Ionicons name="add" size={25} color="#FFFFFF" />

          <Text style={styles.textoBotao}>
            Agendar consulta
          </Text>
        </TouchableOpacity>

        {/* Título */}
        <Text style={styles.titulo}>
          Consultas
        </Text>

        <View style={styles.linha} />

        {/* Lista de consultas */}
        {consultas.map((consulta) => (

          <View style={styles.card} key={consulta.id}>

            <View style={styles.informacoesTopo}>
              <Text style={styles.textoPequeno}>
                Sala: {consulta.sala}
              </Text>

              <Text style={styles.textoPequeno}>
                {consulta.data}
              </Text>
            </View>

            <Text style={styles.statusConsulta}>
              {consulta.status}
            </Text>

            <View style={styles.detalhes}>
              <Text style={styles.textoDetalhes}>
                <Text style={styles.negrito}>Local: </Text>
                {consulta.local}
              </Text>

              <Text style={styles.textoDetalhes}>
                <Text style={styles.negrito}>Horário: </Text>
                {consulta.horario}
              </Text>

              <Text style={styles.textoDetalhes}>
                <Text style={styles.negrito}>Médico: </Text>
                {consulta.medico}
              </Text>
            </View>

            {/* Botões do cartão */}
            <View style={styles.botoesCard}>

              <TouchableOpacity onPress={remarcarConsulta}>
                <Text style={styles.botaoRemarcar}>
                  Remarcar consulta
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => cancelarConsulta(consulta.id)}
              >
                <Text style={styles.botaoCancelar}>
                  Cancelar
                </Text>
              </TouchableOpacity>

            </View>

          </View>

        ))}

      </ScrollView>

      {/* Navegação inferior */}
      <View style={styles.menuInferior}>

        <TouchableOpacity>
          <Ionicons name="home-outline" size={29} color="#000" />
        </TouchableOpacity>

        <TouchableOpacity>
          <Ionicons
            name="calendar-number-outline"
            size={29}
            color="#000"
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <Ionicons name="person-outline" size={29} color="#000" />
        </TouchableOpacity>

      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  cabecalho: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 22,
    paddingTop: 18,
    paddingBottom: 15,
  },

  logo: {
    width: 105,
    height: 55,
  },

  conteudo: {
    paddingHorizontal: 18,
    paddingBottom: 20,
  },

  botaoAgendar: {
    backgroundColor: '#19A99E',
    height: 48,
    borderRadius: 7,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8,
    marginBottom: 25,
    gap: 20,
  },

  textoBotao: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
  },

  titulo: {
    color: '#777777',
    fontSize: 17,
    textAlign: 'center',
    marginBottom: 3,
  },

  linha: {
    height: 1,
    backgroundColor: '#999999',
    marginHorizontal: 10,
    marginBottom: 13,
  },

  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    padding: 11,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#E8E8E8',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.15,
    shadowRadius: 3,
    elevation: 3,
  },

  informacoesTopo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  textoPequeno: {
    fontSize: 10,
    color: '#333333',
  },

  statusConsulta: {
    color: '#07877F',
    fontSize: 13,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 1,
    marginBottom: 12,
  },

  detalhes: {
    marginBottom: 12,
  },

  textoDetalhes: {
    color: '#222222',
    fontSize: 11,
    lineHeight: 14,
  },

  negrito: {
    fontWeight: 'bold',
  },

  botoesCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  botaoRemarcar: {
    color: '#18A99E',
    fontSize: 11,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },

  botaoCancelar: {
    color: '#FF4545',
    fontSize: 11,
    textDecorationLine: 'underline',
  },

  menuInferior: {
    height: 52,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    marginHorizontal: 18,
    marginBottom: 5,
    paddingHorizontal: 18,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',

    borderWidth: 1,
    borderColor: '#EEEEEE',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -1,
    },
    shadowOpacity: 0.10,
    shadowRadius: 4,
    elevation: 4,
  },

});
