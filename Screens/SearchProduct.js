import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { encontrarProdutoPorNome } from '../database/database';
import styles from './styles'; 

const SearchProductScreen = () => {
  const [nome, setNome] = useState('');
  const [produto, setProduto] = useState(null);

  const handleFindProduct = () => {
    encontrarProdutoPorNome(nome, (productFound) => {
      setProduto(productFound);
    });
  };

  return (
    <View style={[styles.container, styles.viewProductContainer]}>
      <Text style={styles.title}>Pesquisar Produto</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome do produto"
        value={nome}
        onChangeText={setNome}
      />
      <Button 
      color="blue"
      title="Buscar produto" onPress={handleFindProduct} />
      {produto && (
        <View style={styles.produtoDetails}>
          <Text>Nome: {produto.nome}</Text>
          <Text>fornecedor: {produto.fornecedor}</Text>
          <Text>quantidade: {produto.quantidade}</Text>
          <Text>data: {produto.data}</Text>
        </View>
      )}
    </View>
  );
};

export default SearchProductScreen;
