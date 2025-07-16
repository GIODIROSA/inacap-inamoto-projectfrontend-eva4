import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Vinyl/componets/Header";
import LayoutInicio from "./Vinyl/componets/layout/LayoutInicio";
import LayoutCatalogo from "./Vinyl/componets/layout/LayoutCatalogo";
import LayoutContact from "./Vinyl/componets/layout/LayoutContact";
import LayoutServicio from "./Vinyl/componets/layout/LayoutServicio";

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<LayoutInicio />} />
          <Route path="/catalogo" element={<LayoutCatalogo />} />
          <Route path="/servicios" element={<LayoutServicio />} />
          <Route path="/contacto" element={<LayoutContact />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
