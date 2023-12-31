import './normalize.css'
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Nav from "./components/layouts/Nav";
import Footer from "./components/layouts/Footer";

import HomePage from "./pages/HomePage.js"
import JuegosPage from "./pages/JuegosPage.js"
import NosotrosPage from "./pages/NosotrosPage.js"
import BlogPage from "./pages/BlogPage.js"
import EmpleosPage from "./pages/EmpleosPage.js"
import ContactoPage from "./pages/ContactoPage.js"


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/juegos" element={<JuegosPage />} />
          <Route path="/nosotros" element={<NosotrosPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/empleos" element={<EmpleosPage />} />
          <Route path="/contacto" element={<ContactoPage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
