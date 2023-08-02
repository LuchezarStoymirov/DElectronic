import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './Pages/Home/Home'
import { Products } from './Pages/Products/Products';
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products" element={<Products/>}/>
      </Routes>
    </Router>
  )
}

export default App;
