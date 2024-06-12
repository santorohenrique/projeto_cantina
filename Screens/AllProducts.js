import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, FlatList, Button, Alert } from 'react-native';
import { showProduct, deleteProduct } from '../database/database';
import styles from './styles';

const AllProductsScreen = ({ navigation }) => {
  const [produtos, setProdutos] = useState([]);
  const [filtroNome, setFiltroNome] = useState('');

  useEffect(() => {
    showProduct((produtos) => {
      setProdutos(produtos);
    });
  }, []);

  const handleEditProduct = (produto) => {
    navigation.navigate('AlterarProduto', { produto });
  };

  const handleDeleteProduct = (id) => {
    Alert.alert(
      'Confirmar Exclusão',
      'Deseja realmente excluir este produto?',
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Excluir',
          onPress: () => {
            deleteProduct(id, (rowsAffected) => {
              if (rowsAffected > 0) {
                Alert.alert('Sucesso', 'Produto excluído com sucesso.');
                showProduct(setProdutos); 
              } else {
                Alert.alert('Erro', 'Erro ao excluir o produto. Tente novamente.');
              }
            });
          },
        },
      ],
      { cancelable: false }
    );
  };

  const produtosFiltrados = produtos.filter(produto =>
    produto.nome.toLowerCase().includes(filtroNome.toLowerCase())
  );

  return (
    <View style={[styles.containerVisual, styles.showAllContainer]}>
      <Text style={styles.titlePesquisa}>Pesquise o nome do produto</Text>
      <TextInput
        style={styles.input}
        placeholder="Filtrar por nome"
        value={filtroNome}
        onChangeText={setFiltroNome}
      />
      <FlatList
        data={produtosFiltrados}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>Nome do produto: {item.nome}</Text>
            <Text>Fornecedor/Marca: {item.fornecedor}</Text>
            <Text>Quantidade: {item.quantidade}</Text>
            <Text>Data de Compra: {item.data_compra}</Text>
            <View style={styles.buttonRow}>
              <View style={styles.button}>
                <Button
                  title="Editar"
                  color="#A6C48A"
                  onPress={() => handleEditProduct(item)}
                />
              </View>
              <View style={styles.button}>
                <Button
                  title="Apagar"
                  color="#D9534F"
                  onPress={() => handleDeleteProduct(item.id)}
                />
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default AllProductsScreen;
