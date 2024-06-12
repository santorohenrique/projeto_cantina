import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#FFFB82',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 2,
    marginBottom: 13,
    paddingHorizontal: 10,
    borderRadius: 8,
  },
  
 
  cadastroContainer: {
    justifyContent: 'center',  
  },

  containerCont: {
    flex: 1,
    padding: 16,
    backgroundColor: 'white',
  },
  
  containerVisual: {
    flex: 1,
    padding: 16,
    backgroundColor: 'white',
  },

  containerEditar: {
    flex: 1,
    padding: 16,
    backgroundColor: 'white',
  },
  
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },

  titlePesquisa: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  titleEditarProd: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  item: {
    marginVertical: 10,
    borderWidth: 1,
    borderColor: 'grey',
    padding: 10,
    borderRadius: 10,
  },

  
  homeContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    marginTop: 3,
  },
  button: {
    marginVertical: 6,  
    borderRadius: 10,   
    overflow: 'hidden',
    marginTop:10, 
  },

  
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },

  buttonRegister: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10, 
    justifyContent: 'center',
    
  },


  
  viewProductContainer: {
    justifyContent: 'center',
  },
  produtoDetails: {
    marginTop: 10,
  },

  
  alterarContainer: {
    justifyContent: 'center',
  },

  
  logo: {
    width: 300,
    height: 230,
    marginBottom: 40,
  },

  iconCadastro: {
    width: 200,
    height: 200,
    marginBottom: 40,
    justifyContent: 'center',
    left: 85,
  },
});

export default styles;
