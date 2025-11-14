import { BrowserRouter, Routes, Route } from "react-router-dom"

import SiteLayout from "./layout/SiteLayout"
import Homepage from "./pages/Homepage"
import Products from "./pages/Products"
import About from "./pages/About"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        {/* Il route del layout è senza l'attributo to */}
        <Route element={<SiteLayout />}>
          {/* Alla pagina home va assegnato l'attributo index */}
          <Route index element={<Homepage />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
