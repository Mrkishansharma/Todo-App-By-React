import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Add from './Pages/Add/Add';
import Update from './Pages/Update/Update';

function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <div>
          <Link to={"/"}> Home </Link>
          <Link to={"/add"}> Add Todos </Link>
        </div>

        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/add' element={ <Add /> } />
          <Route path='/update/:todoID' element={ <Update /> } />
        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;
