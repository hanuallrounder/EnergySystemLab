import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//impart pages
import Home from './pages/Home';
import LlistOfEquipments from './pages/ListOfEquipments';
import ListOfProjects from './pages/ListOfProjects';
import Team from './pages/Team';
import Contact from './pages/Contact';
import Copyright from './components/Copyright';

function App() {
  return (
    
      <Fragment>
        <Router>
          
            <Routes>
              <Route exact path='/' element={<Home />} />
              <Route exact path='/listOfEquipments' element={<LlistOfEquipments/>} />
              <Route exact path='/listOfProjects' element={<ListOfProjects  />} />
              <Route exact path='/team' element={<Team />} />
              <Route exact path='/contact-us' element={<Contact />} />
            </Routes>
            <Copyright />
        </Router>
      </Fragment>
  );
}

export default App;