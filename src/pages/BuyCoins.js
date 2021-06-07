import React from "react";
import DashboardNavUser from "../components/Header/DashboardNavUser";

const BuyCoins = () => {
  
  const body = (
      <div className="container-fluid  bg-white">
          <h4 className='my-2'>Buy Coins</h4>
      <div className="row" id="home">
        <div className="col-sm-3 p-3">
            <a href="#home">
                <div className="border bg-success text-center py-4 shadow">
                    <h2 className='my-4  text-light'>50 Coins</h2>
                </div>
            </a>
        </div>
        <div className="col-sm-3 p-3">
            <a href="#home">
                <div className="border bg-info text-center py-4 shadow">
                    <h2 className='my-4  text-light'>100 Coins</h2>
                </div>
            </a>
        </div>
        <div className="col-sm-3 p-3">
            <a href="#home">
                <div className="border bg-primary text-center py-4 shadow">
                    <h2 className='my-4  text-light'>150 Coins</h2>
                </div>
            </a>
        </div>
        <div className="col-sm-3 p-3">
            <a href="#home">
                <div className="border bg-secondary text-center py-4 shadow">
                    <h2 className='my-4  text-light'>200 Coins</h2>
                </div>
            </a>
        </div>
      </div>
    </div>
  );
  return <DashboardNavUser body={body} />;
};

export default BuyCoins;
