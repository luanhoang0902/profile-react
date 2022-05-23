import './App.css';
import Intro from './components/Intro';
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom';
import Projects from './features/Projects';
import Technologies from './features/Technologies';
import About from './features/About';
import Contact from './features/Contact';
import Home from './components/Home';

function App() {
  return (
    <div className="App" style = {{background: '#0d0c22', color: '#fff',overflow: 'hidden'}}>
      {/* <Intro/> */}
      <Header/>
      <Routes>
        <Route path = '/' element = {<Intro/>} exact />
        <Route path = '/' element = {<Home/>} exact />
        <Route path = '/Projects' element = {<Projects/>} exact />
        <Route path = '/Technologies' element = {<Technologies/>} exact />
        <Route path = '/About' element = {<About/>} exact />
        <Route path = '/Contact' element = {<Contact/>} exact />
      </Routes>
      <Home/>
    </div>
  );
}

export default App;
