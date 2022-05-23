import './App.css';
import Intro from './components/Intro';
import Header from './components/Header'

function App() {
  return (
    <div className="App" style = {{color: '#333'}}>
      <Intro/>
      <Header/>
    </div>
  );
}

export default App;
