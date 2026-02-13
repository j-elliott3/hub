import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage.tsx";
import { CategoryPage } from "./pages/CategoryPage.tsx";
import { ServicePage } from "./pages/ServicePage.tsx";
import './App.css'

function App() {
  return (
    <BrowserRouter>
      {/* A simple global layout: extract this to a Layout component later. */}
      <div
        style={{
          minHeight: "100vh",
          backgroundColor: "#000",
          color: "#fff",
          fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        }}
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/categories/:categoryId" element={<CategoryPage />}/>
          <Route path="/services/:serviceId" element={<ServicePage />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
