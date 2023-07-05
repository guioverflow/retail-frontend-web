import React, { useState } from 'react';

interface Product {
  id: number;
  name: string;
  price: number;
}

const PDV = () => {
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);
  const [total, setTotal] = useState<number>(0);

  const handleProductSelection = (product: Product) => {
    setSelectedProducts([...selectedProducts, product]);
    setTotal(total + product.price);
  };

  const handleCancelSale = () => {
    setSelectedProducts([]);
    setTotal(0);
  };

  const handleCompleteSale = () => {
    // Lógica para finalizar a venda
  };

  return (
    <div>
      <h1>Ponto de Venda</h1>

      <div>
        <h2>Produtos Selecionados</h2>
        {selectedProducts.length > 0 ? (
          <ul>
            {selectedProducts.map((product) => (
              <li key={product.id}>{product.name} - R${product.price.toFixed(2)}</li>
            ))}
          </ul>
        ) : (
          <p>Nenhum produto selecionado.</p>
        )}
      </div>

      <div>
        <button className="btn btn-primary" onClick={() => handleProductSelection({ id: 1, name: 'Produto 1', price: 10.99 })}>Adicionar Produto</button>
        <button className="btn btn-danger" onClick={handleCancelSale}>Cancelar Venda</button>
        <button className="btn btn-success" onClick={handleCompleteSale}>Finalizar Venda</button>
      </div>

      <div>
        <h2>Total da Venda</h2>
        <p>R${total.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default PDV;
