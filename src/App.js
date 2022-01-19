import logo from './logo.svg';
import './App.css';
import Home from './screens/Home';
import Header from './components/Header'
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Header/>
      <Home/>
      <Footer/>

    {/* Header
      Banner
      Search
      Cards
    BAnner */}
    </div>
  );
}

export default App;
