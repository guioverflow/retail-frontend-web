import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserComponent from './userComponet';

interface User {
  idUser: number;
  displayName: string;
  username: string;
}

const UsersPage = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:8080/users');
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const handleEditUser = (userId: number) => {
    // Lógica para editar o usuário com o ID fornecido
  };

  const handleRemoveUser = (userId: number) => {
    // Lógica para remover o usuário com o ID fornecido
    // Exibir uma confirmação antes de remover
  };

  const handleAddUser = () => {
    // Lógica para adicionar um novo usuário
  };

  return (
    <div>
      <h1>Usuários</h1>

      {users.map((user) => (
        <UserComponent key={user.idUser} displayName={user.displayName} username={user.username} />
      ))}

      <button onClick={handleAddUser}>Adicionar Usuário</button>
    </div>
  );
};

export default UsersPage;
