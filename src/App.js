import logo from './logo.svg';
import './App.css';
import {Button} from 'antd';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Primera App Prueba
        </a>
        <Button type="primary">Primary</Button>
      </header>
    </div>
  );
}

export default App;