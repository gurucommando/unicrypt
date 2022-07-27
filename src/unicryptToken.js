import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import axios from 'axios';


class UnicryptToken extends React.Component {
    state = { 
       
    } 
    
    render() { 
        
        

        return (
            <>
             <div className="main-token">
                <div className="token-box">
                    <div className="row ">
                        <div className="col-6 pt-3 text-start token-box bg-dark" >
                            <img className="" style={{width:'11%'}} src="/images/WETH-Token.png"/>
                            <h4 className="d-inline-block ms-2">WETH</h4>
                            <div className="d-flex">
                                <p className="lh">#1</p>
                                <p className=" ms-3"> Wrapped Ether</p>
                            </div>
                            <p className=" ">pair index:</p>
                            <span className=" ">30d:</span>
                        </div>
                        <div className="col-6 pt-3 text-end   token-box bg-dark " >
                            <h4 className="d-inline-block ms-2">$1053</h4>
                            <p className=" font-monospace">vol:</p>
                            <p className="lh-1 ">dmcap:</p>
                            <p className=" ">1d:</p>
                        </div><hr/>
                </div>   
            </div>
                
                
                    
                
            </div>

           
                
            </>
        );
    }
}
 
export default UnicryptToken;