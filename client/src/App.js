import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/Home' element={<Home />}>Home</Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
