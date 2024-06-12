import { openDatabase } from 'expo-sqlite';

const db = openDatabase('ControleProdutos.db');

db.transaction((tx) => {
  tx.executeSql(
    `CREATE TABLE IF NOT EXISTS produtos 
     (id INTEGER PRIMARY KEY AUTOINCREMENT, 
      nome TEXT, 
      fornecedor TEXT, 
      quantidade TEXT,  
      data_compra TEXT);`
  );
});

const addProduct = (nome, fornecedor, quantidade, data_compra, callback) => {
  db.transaction((tx) => {
    tx.executeSql(
      'INSERT INTO produtos (nome, fornecedor, quantidade, data_compra) VALUES (?, ?, ?, ?)',
      [nome, fornecedor, quantidade, data_compra],
      (_, result) => {
        callback(result.insertId);
      },
      (_, error) => {
        console.error('Erro ao adicionar produto:', error);
        callback(null);
      }
    );
  });
};

const showProduct = (callback) => {
  db.transaction((tx) => {
    tx.executeSql('SELECT * FROM produtos', [], (_, { rows }) => {
      callback(rows._array);
    });
  });
};

const pesquisarNome = (nome, callback) => {
  db.transaction((tx) => {
    tx.executeSql('SELECT * FROM produtos WHERE nome = ?', [nome], (_, { rows }) => {
      if (rows.length > 0) {
        callback(rows._array[0]);
      } else {
        callback(null);
      }
    });
  });
};

const editProduct = (id, nome, fornecedor, quantidade, data_compra, callback) => {
  db.transaction((tx) => {
    const sql = 'UPDATE produtos SET nome = ?, fornecedor = ?, quantidade = ?, data_compra = ? WHERE id = ?';
    const params = [nome, fornecedor, quantidade, data_compra, id];

    tx.executeSql(
      sql,
      params,
      (_, result) => {
        callback(result.rowsAffected);
      },
      (_, error) => {
        console.error('Erro ao alterar produto:', error);
        callback(0);
      }
    );
  });
};

const deleteProduct = (id, callback) => {
  db.transaction((tx) => {
    tx.executeSql(
      'DELETE FROM produtos WHERE id = ?',
      [id],
      (_, result) => {
        callback(result.rowsAffected);
      },
      (_, error) => {
        console.error('Erro ao excluir produto:', error);
        callback(0);
      }
    );
  });
};

export { addProduct, showProduct, editProduct, pesquisarNome, deleteProduct };
