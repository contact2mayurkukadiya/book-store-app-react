import { Route, Routes } from 'react-router-dom';
import './App.css';
import Button from '@mui/material/Button';
import BookStoreLayoutComponent from './Book-store/BookStoreLayout';


function App() {
  return (
    <Routes>
      <Route path='/' element={<BookStoreLayoutComponent />}></Route>
    </Routes>
  );
}

export default App;
