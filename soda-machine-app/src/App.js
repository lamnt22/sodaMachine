import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './component/pages/login';
import Home from './component/pages';
import Admin from './component/pages/admin';
import SignUp from './component/pages/login/signUp';
import CreateProduct from './component/pages/admin/create';
import EditProduct from './component/pages/admin/edit';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />}/>
      <Route path="/admin" element={<Admin />} />
      <Route path="/register" element={<SignUp />} />
      <Route path="/admin/create" element={<CreateProduct />} />
      <Route path="/admin/edit/:id" element={<EditProduct />} />
    </Routes>
  );
}

export default App;
