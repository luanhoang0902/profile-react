import './App.css';
import Intro from './components/Intro';
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom';
import Projects from './features/Projects';

function App() {
  return (
    <div className="App" style = {{background: '#0d0c22', color: '#fff'}}>
      <Intro/>
      <Header/>
      <Routes>
        <Route path = '/Projects' element = {<Projects/>} exact />
      </Routes>
    </div>
  );
}

export default App;
