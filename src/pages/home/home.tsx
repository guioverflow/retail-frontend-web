import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/navbar';

const Home = () => {
  return (
    <div>
      <div className="App">
        <Header></Header>
        <header className="App-header">
        <div className="d-grid gap-2">
          <Link to="/pdv" className="btn btn-primary" role="button">PDV</Link>
          <Link to="/stock" className="btn btn-primary" role="button">Estoque</Link>
          <Link to="/users" className="btn btn-primary" role="button">Usuários</Link>
          <Link to="/establishments" className="btn btn-primary" role="button">Estabelecimentos</Link>
      </div>
        </header>
        </div>
      
    </div>
  );
};

export default Home;
