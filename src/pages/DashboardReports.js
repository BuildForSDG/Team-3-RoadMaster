import React from "react";
import DashboardNav from "../components/Header/DashboardNav";

const DashboardReports = () => {
  const body = (
    <div className="container-fluid my-4 pt-4">
          <div className="row">
              {/* order by latest date */}
              <div className="col-sm-4 mb-4">
                  <div className="card">
                      <div className="card-body">
                          <h5 className="card-title">Ikorodu Roundabout</h5>
                          <p className="card-text">Victims Details:</p>
                          <ul class="list-group list-group-flush">
                              <li class="list-group-item">Name: <span className='float-right'>Abodunrin Michael Ajayi</span></li>
                              <li class="list-group-item">Blood Type: <span className='float-right'>O+</span></li>
                              <li class="list-group-item">Genotype: <span className='float-right'>AS</span></li>
                              <li class="list-group-item">Known Illness: <span className='float-right'>Athsma</span></li>
                              <li class="list-group-item">Age: <span className='float-right'>27</span></li>
                          </ul>
                      </div>
                  </div>
              </div>
              <div className="col-sm-4 mb-4">
                  <div className="card">
                      <div className="card-body">
                          <h5 className="card-title">Ikorodu Roundabout</h5>
                          <p className="card-text">Victims Details:</p>
                          <ul class="list-group list-group-flush">
                              <li class="list-group-item">Name: <span className='float-right'>Abodunrin Michael Ajayi</span></li>
                              <li class="list-group-item">Blood Type: <span className='float-right'>O+</span></li>
                              <li class="list-group-item">Genotype: <span className='float-right'>AS</span></li>
                              <li class="list-group-item">Known Illness: <span className='float-right'>Athsma</span></li>
                              <li class="list-group-item">Age: <span className='float-right'>27</span></li>
                          </ul>
                      </div>
                  </div>
              </div>
              <div className="col-sm-4 mb-4">
                  <div className="card">
                      <div className="card-body">
                          <h5 className="card-title">Ikorodu Roundabout</h5>
                          <p className="card-text">Victims Details:</p>
                          <ul class="list-group list-group-flush">
                              <li class="list-group-item">Name: <span className='float-right'>Abodunrin Michael Ajayi</span></li>
                              <li class="list-group-item">Blood Type: <span className='float-right'>O+</span></li>
                              <li class="list-group-item">Genotype: <span className='float-right'>AS</span></li>
                              <li class="list-group-item">Known Illness: <span className='float-right'>Athsma</span></li>
                              <li class="list-group-item">Age: <span className='float-right'>27</span></li>
                          </ul>
                      </div>
                  </div>
              </div>
              <div className="col-sm-4 mb-4">
                  <div className="card">
                      <div className="card-body">
                          <h5 className="card-title">Ikorodu Roundabout</h5>
                          <p className="card-text">Victims Details:</p>
                          <ul class="list-group list-group-flush">
                              <li class="list-group-item">Name: <span className='float-right'>Abodunrin Michael Ajayi</span></li>
                              <li class="list-group-item">Blood Type: <span className='float-right'>O+</span></li>
                              <li class="list-group-item">Genotype: <span className='float-right'>AS</span></li>
                              <li class="list-group-item">Known Illness: <span className='float-right'>Athsma</span></li>
                              <li class="list-group-item">Age: <span className='float-right'>27</span></li>
                          </ul>
                      </div>
                  </div>
              </div>
          </div>
    </div>
  );
  return <DashboardNav body={body} />;
};

export default DashboardReports;
