import './App.css';
import Intro from './components/Intro';
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom';
import Projects from './features/Projects';
import Technologies from './features/Technologies';
import About from './features/About';
import Contaxt from './features/Contaxt';

function App() {
  return (
    <div className="App" style = {{background: '#0d0c22', color: '#fff'}}>
      <Intro/>
      <Header/>
      <Routes>
        <Route path = '/Projects' element = {<Projects/>} exact />
        <Route path = '/Technologies' element = {<Technologies/>} exact />
        <Route path = '/About' element = {<About/>} exact />
        <Route path = '/Contaxt' element = {<Contaxt/>} exact />
      </Routes>
    </div>
  );
}

export default App;
