import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.min.css';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { useEffect, useState } from 'react';
import Page from './Components/Page';

function App() {

  const [page, setPage] = useState('home')

  useEffect(() => {
    const hash = window.location.hash.substr(1)
    hash ? setPage(hash) : setPage('home')
  },[])

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
