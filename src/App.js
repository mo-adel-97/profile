import './App.css';
import Home from './Pages/Home/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FormComponent from './Components/FormLogin&Signup/FormComponent';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route index element={<Home />} />
          <Route path="/login" element={<FormComponent />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
