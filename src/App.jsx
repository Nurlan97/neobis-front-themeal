
import './App.scss';
import DishDetails from './components/DishDetails/DishDetails';
import Main from './components/Main';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <Link to="/" className='App-header__title'>The Meal</Link>
          
        </header>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/dishDetails/:id" element={<DishDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
