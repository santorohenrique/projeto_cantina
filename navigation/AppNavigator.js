import React from 'react';
import HomeScreen from './Home';
import RegisterScreen from '../Screens/Register'; 
import AllProductsScreen from '../Screens/AllProducts';
import EditProductScreen from '../Screens/EditProduct';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Tela Inicial' }}
        />
        <Stack.Screen
          name="Cadastro" 
          component={RegisterScreen} 
          options={{ title: 'Cadastro de Produto' }} 
        />
        <Stack.Screen
          name="ShowAllProduct" 
          component={AllProductsScreen} 
          options={{ title: 'Estoque de produtos' }} 
        />
        <Stack.Screen
          name="AlterarProduto" 
          component={EditProductScreen} 
          options={{ title: 'Editar Produto' }} 
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;