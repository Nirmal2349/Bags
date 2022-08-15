import "./App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/productScreen";



function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <Link to="/" className="hlink">Bags</Link>
        </header>
        <main>
          <Routes>
            <Route path="/product/:slug" element={<ProductScreen/>}/>
            <Route path="/" element={<HomeScreen />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
