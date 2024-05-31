import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Header from './components/header'
import AddData from './Pages/AddData';


const App = () => {


  return (
    <div className="container mx-auto ">
    <Router>
      <Header />
      <div className="container mx-auto p-4 ">
        <Routes>
          
          <Route path="/" element={<Home />} />
          <Route path="/addData" element={<AddData />} />
        </Routes>
      </div>
    </Router>
    </div>
  );
};

export default App;
