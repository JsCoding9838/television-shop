import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Shop from './components/Shop/Shop';
import Header from './components/Header/Header';
import AboutReact from './components/AboutReact/AboutReact';

function App() {
  return (
    <div className="App">
      <Header/>
      <Shop/>
      <AboutReact/>
    </div>
  );
}

export default App;
