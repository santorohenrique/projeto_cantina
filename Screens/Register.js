import React, { useState } from 'react';
import { View, TextInput, Button, Alert, Image } from 'react-native';
import { addProduct } from '../database/database';
import styles from './styles';

const RegisterScreen = ({ navigation }) => {
  const [nome, setNome] = useState('');
  const [fornecedor, setFornecedor] = useState('');
  const [quantidade, setQuantidade] = useState('');
  const [data_compra, setData] = useState('');

  const handleCadastro = () => {
    let camposFaltando = [];

    if (!nome) {
      camposFaltando.push('Nome');
    }
    if (!fornecedor) {
      camposFaltando.push('Fornecedor');
    }
    if (!quantidade) {
      camposFaltando.push('Quantidade');
    }
    if (!data_compra) {
      camposFaltando.push('Data de compra');
    }

    if (camposFaltando.length > 0) {
      Alert.alert(
        'Ops!',
        `Você não preencheu todos os campos!
        \nCampos não preenchidos: ${camposFaltando.join(', ')}`
      );
      return;
    }

    addProduct(nome, fornecedor, parseInt(quantidade), data_compra, (id) => {
      if (id) {
        Alert.alert('Sucesso', 'Produto cadastrado com sucesso.');
        navigation.navigate('Home');
      } else {
        Alert.alert('Erro', 'Erro inesperado! Tente novamente.');
      }
    });
  };

  return (
    <View style={[styles.containerCont, styles.cadastroContainer]}>
      <Image source={require('../assets/cadastroIcone.png')} style={styles.iconCadastro} />
      <TextInput
        style={styles.input}
        placeholder="Nome do Produto"
        value={nome}
        onChangeText={setNome}
      />
      <TextInput
        style={styles.input}
        placeholder="Fornecedor/Marca"
        value={fornecedor}
        onChangeText={setFornecedor}
      />
      <TextInput
        style={styles.input}
        placeholder="Quantidade em estoque"
        value={quantidade}
        onChangeText={setQuantidade}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Data de compra"
        value={data_compra}
        onChangeText={setData}
      />

      <View style={styles.buttonRegister}> 
        <Button
          color="blue"
          title="Cadastrar"
          style={styles.button}
          onPress={handleCadastro}
        />
      </View>
    </View>
  );
};

export default RegisterScreen;
