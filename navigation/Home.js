import React from 'react';
import { View, Text, Button, Image } from 'react-native';
import styles from '../Screens/styles'; 

const HomeScreen = ({ navigation }) => {
  const handleCadastro = () => {
    navigation.navigate('Cadastro');
  };
  const handleShowAllProduct = () => {
    navigation.navigate('ShowAllProduct');
  };


  return (
    <View style={[styles.container, styles.homeContainer]}>
      <Image source={require('../assets/logoGrande.jpg')} style={styles.logo} />
      <Text style={styles.title}>Controle de Estoque</Text>
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Button title="Cadastrar um Produto" color="blue" onPress={handleCadastro} />
        </View>
        <View style={styles.button}>
          <Button title="Visualizar Estoque" color="blue" onPress={handleShowAllProduct} />
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;
