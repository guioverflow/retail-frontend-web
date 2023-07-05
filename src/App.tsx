
import './App.css';
import Default from './pages/default/default'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/login/login';
import Home from './pages/home/home';
import PDV from './pages/pdv/pdv';
import UsersPage from './pages/users/users';
import EstablishmentsPage from './pages/establishments/establishments';
import StockPage from './pages/stock/stock';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/pdv" element={<PDV />} />
        <Route path="/stock" element={<StockPage />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/establishments" element={<EstablishmentsPage />} />
      </Routes>
    </Router>
  );
};

export default App;