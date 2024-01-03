import React from 'react';
import NavBar from '../components/Navbar.jsx';
import MainContainer from '../containers/MainContainer.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ItemDetailsContainer from '../containers/ItemDetailsContainer.jsx';

const App = () => {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="storecontent">
          <Routes>
            <Route path='/' element={<MainContainer />} />
            <Route path='/listing' element={<ItemDetailsContainer />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
