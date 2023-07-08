import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { useState } from 'react';
import Page from './Components/Page';

function App() {

  const [page, setPage] = useState('home')

  return (
    <div className="App">
      <Header
        page={page}
        setPage={setPage}  
      />
      <Page 
        page={page}
      />
      <Footer />
    </div>
  );
}

export default App;
