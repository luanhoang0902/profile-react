import './App.css';
import Intro from './components/Intro';
import Header from './components/Header'

function App() {
  return (
    <div className="App" style = {{background: '#0d0c22', color: '#fff'}}>
      <Intro/>
      <Header/>
    </div>
  );
}

export default App;
