import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Product {
  id: number;
  name: string;
  quantity: number;
}

const StockPage = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('/api/products');
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const handleEditProduct = (productId: number) => {
    // Lógica para editar o produto com o ID fornecido
  };

  const handleRemoveProduct = (productId: number) => {
    // Lógica para remover o produto com o ID fornecido
    // Exibir uma confirmação antes de remover
  };

  const handleAddProduct = () => {
    // Lógica para adicionar um novo produto
  };

  return (
    <div>
      <h1>Produtos</h1>

      {products.map((product) => (
        <div key={product.id}>
          <p>Nome: {product.name}</p>
          <p>Quantidade em estoque: {product.quantity}</p>
          <button onClick={() => handleEditProduct(product.id)}>Editar</button>
          <button onClick={() => handleRemoveProduct(product.id)}>Remover</button>
        </div>
      ))}

      <button onClick={handleAddProduct}>Adicionar Produto</button>
    </div>
  );
};

export default StockPage;
