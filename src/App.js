import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
// import Footer from "./components/Footer";
import Header from "./components/Header";
import Bottomwear from "./pages/Bottomwear";
import Home from "./pages/Home";
import Men_clothing from "./pages/Men_clothing";
import PageNotFound from "./pages/PageNotFound";
import Topwear from "./pages/Topwear";
import Women_clothing from "./pages/Women_clothing";

function App() {
  return (
    <div className='app'>
      <Header />
      <Router>
        <Switch>
          {/* <Route path='/top-wear'>
            <Topwear />
          </Route>
          <Route path='/bottom-wear'>
            <Bottomwear />
          </Route> */}
          <Route path='/'>
            <Men_clothing />
          </Route>
          {/* <Route path='/women-clothing'>
            <Women_clothing />
          </Route> */}
          {/* <Route path='/' exact>
            <Home />
          </Route> */}
          {/* <Route path='/'>
            <PageNotFound />
          </Route> */}
        </Switch>
      </Router>
      {/* <Footer /> */}
      {/* -- mini header */}
      {/* -- Navbar */}
      {/* Page */}
      {/* Footer */}
      {/* -- main footer */}
      {/* -- Route Desc */}
      {/* -- Info */}
    </div>
  );
}

export default App;
