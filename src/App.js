import logo from "./logo.svg";
import "./App.css";
import Home from "./screens/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter, Route,Routes } from "react-router-dom";
import SearchPage from "./screens/SearchPage";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />

        <Routes>
         
           <Route path='/search'element={<SearchPage/>}/>
           <Route path='/' element={<Home/>}/>
       
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
