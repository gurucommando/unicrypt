import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import{BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import{Link} from 'react-router-dom';
import UnicryptToken from "./unicryptToken";
import UniCrypt1 from "./uniCrypt1";
import UnicryptTokenForm from "./unicryptTokenForm";

class Navbar extends React.Component {
    state = { 

     } 
    render() { 
        return (
        <>
        <Router>
            <nav class="navbar navbar-expand-lg navbar-dark">
             <div class="container-fluid nav-logo">
                <img alt="logo2" src="./images/nav-logo.svg"/>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
              <div class="" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item"><Link to='/uniCrypt'>
                    <a class="nav-link" type="box" aria-current="page" href="#">Home</a></Link>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" type="box" aria-current="page" href="#"></a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">TOKENS</a>
                  </li>
                  <li class="nav-item"><Link to= '/unicryptTokenForm'>
                    <a class="nav-link" href="#">Add Data</a></Link>
                  </li>
                  <li className="nav-item active"  type="submit"><Link to='/unicryptToken'>
                    <a className="nav-link" href="#">LAUNCH</a></Link>
                  </li>
                </ul>
                
                    
               
              </div>
            </div>
          </nav>
            <Routes>
                  <Route path="/unicrypt" element ={<UniCrypt1/>}/>
                  <Route path="/unicryptToken" element ={<UnicryptToken/>}/>
                  <Route path="/unicrypt" element ={<UniCrypt1/>}/>
                  <Route path="/unicryptTokenForm" element ={<UnicryptTokenForm/>}/>
            </Routes>
          </Router>
        </>
        );
    }
}
 
export default Navbar;