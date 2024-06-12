import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, Alert, Image } from 'react-native';
import { editProduct } from '../database/database';
import styles from './styles';
const EditProductScreen = ({ route, navigation }) => {
  const { produto } = route.params;
  
  const [nome, setNome] = useState(produto.nome);
  const [fornecedor, setFornecedor] = useState(produto.fornecedor);
  const [quantidade, setQuantidade] = useState(produto.quantidade);
  const [data, setData] = useState(produto.data);

  const handleSaveProduct = () => {
    editProduct(produto.id, nome, fornecedor, quantidade, data, (rowsAffected) => {
      if (rowsAffected > 0) {
        Alert.alert('Sucesso', 'Produto alterado com sucesso.');
        navigation.navigate('Home');
      } else {
        Alert.alert('Erro', 'Erro ao alterar o produto. Tente novamente.');
      }
    });
  };

  return (
    <View style={[styles.containerEditar, styles.alterarContainer]}>
      <Image source={require('../assets/editLogo.png')} style={styles.iconCadastro} />
      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
      />
      <TextInput
        style={styles.input}
        placeholder="Fornecedor"
        value={fornecedor}
        onChangeText={setFornecedor}
      />
      <TextInput
        style={styles.input}
        placeholder="Quantidade"
        value={quantidade}
        onChangeText={setQuantidade}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Data"
        value={data}
        onChangeText={setData}
      />
     
     <View style={styles.buttonRegister}>
      <Button 
      style={styles.buttonRegister}
      color="blue"
      title="Salvar alterações" 
      onPress={handleSaveProduct} />
      </View>
    </View>
  );
};

export default EditProductScreen;
