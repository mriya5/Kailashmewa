import './App.css';
import Header from './Component/Header';
import Home from './Component/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Searchresult from './Searchresult';
function App() {
  return (
    <div className="App">
      {/* <Header/> */}
      <BrowserRouter>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path="/search" element={<Searchresult />} />
          {/* Add other routes here */}
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
