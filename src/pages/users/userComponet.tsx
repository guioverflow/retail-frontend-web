import React from 'react';
import EditButton from '../../components/editButton';
import DeleteButton from '../../components/deleteButton';

interface UserProps {
  displayName: string;
  username: string;
}

const UserComponent = ({ displayName, username }: UserProps) => {
  return (
    <div className="user-container">
      <p>Nome: {displayName}</p>
      <p>Usuário: {username}</p>
      <div className="button-container">
        <EditButton />
        <DeleteButton />
      </div>
    </div>
  );
};

export default UserComponent;
