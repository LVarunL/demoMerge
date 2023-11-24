import React from "react";
import { Link, useNavigate } from "react-router-dom";
import '../style/stock.css'
const Stock = (prop) => {
    
    
  return (
            <div className="col-4">
             <div className="card l-bg-blue-dark">
              <div className="card-statistic-3 p-4">
                <div className="card-icon card-icon-large">
                  <i className="fas fa-users"></i>
                </div>
                <div className="mb-4">
                  <h5 className="card-title mb-0">{prop.name}</h5>
                </div>
                <div className="row align-items-center mb-2 d-flex">
                  <div className="col-8">
                    <h2 className="d-flex align-items-center mb-0">$ {prop.lastClose}</h2>
                  </div>
                  <div className="col-4 text-right">
                    <span>
                      {prop.lastChange}% <i className="fa fa-arrow-up"></i>
                    </span>
                  </div>
                </div>
                <div>
                    <Link to={`/share/${prop.name}`}><button>Redirect</button></Link>
                </div>
              </div>
            </div>
            </div>
          
        
  );
};

export default Stock;