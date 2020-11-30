import React from 'react';
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar';
import { Route, Redirect, Switch, useLocation } from 'react-router-dom';
import About from './components/about/About';
import Formations from './components/Formations';
import Projets from './components/Projets';
import Competences from './components/Competences';
import { AnimatePresence } from 'framer-motion'
import Contact from './components/contact/Contact';
function App() {

  const location = useLocation();
  return (

    <div className="app">
      <div className="container app__container">
        <div className="row app__row">
          <div className="col-lg-3">
            <Sidebar />
          </div>
          <div className="col-lg-9 app__main-content">
            {/* navbar */}
            <Navbar />
            <AnimatePresence exitBeforeEnter>
              <Switch location={location} key={location.key}>
                <Route exact path="/">
                  <About />
                </Route>
                <Route path="/formations">
                  <Formations />
                </Route>
                <Route path="/competences">
                  <Competences />
                </Route>
                <Route path="/projets" component={Projets} />
                <Route path="/contact" >
                  <Contact />
                </Route>
                <Route>
                  <Redirect to="/" />
                </Route>
              
              </Switch>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>

  );
}

export default App;