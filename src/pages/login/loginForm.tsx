import React, { ChangeEvent, FormEvent, useState } from 'react';
import TextInput from './textInput';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Lógica de autenticação aqui
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextInput
        label="Usuário"
        placeholder="Digite seu usuário"
        value={username}
        onChange={handleUsernameChange}
      />
      <TextInput
        label="Senha"
        placeholder="Digite sua senha"
        value={password}
        onChange={handlePasswordChange}
      />
      <button type="submit" className="btn btn-primary">Entrar</button>
    </form>
  );
};

export default LoginForm;
