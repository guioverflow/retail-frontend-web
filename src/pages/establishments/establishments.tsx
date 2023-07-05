import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Establishment {
  id: number;
  name: string;
}

const EstablishmentsPage = () => {
  const [establishments, setEstablishments] = useState<Establishment[]>([]);

  useEffect(() => {
    fetchEstablishments();
  }, []);

  const fetchEstablishments = async () => {
    try {
      const response = await axios.get('/establishments');
      setEstablishments(response.data);
    } catch (error) {
      console.error('Error fetching establishments:', error);
    }
  };

  const handleEditEstablishment = (establishmentId: number) => {
    // Lógica para editar o estabelecimento com o ID fornecido
  };

  const handleRemoveEstablishment = (establishmentId: number) => {
    // Lógica para remover o estabelecimento com o ID fornecido
    // Exibir uma confirmação antes de remover
  };

  const handleAddEstablishment = () => {
    // Lógica para adicionar um novo estabelecimento
  };

  return (
    <div>
      <h1>Estabelecimentos</h1>

      {establishments.map((establishment) => (
        <div key={establishment.id}>
          <p>Nome: {establishment.name}</p>
          <button onClick={() => handleEditEstablishment(establishment.id)}>Editar</button>
          <button onClick={() => handleRemoveEstablishment(establishment.id)}>Remover</button>
        </div>
      ))}

      <button onClick={handleAddEstablishment}>Adicionar Estabelecimento</button>
    </div>
  );
};

export default EstablishmentsPage;
