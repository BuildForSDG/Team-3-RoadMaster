import React, { useState } from "react";
import DashboardNavUser from "../components/Header/DashboardNavUser";
import socket from "../utility/socketioConnection";
import $ from "jquery";
import 'popper.js/dist/popper';
import 'bootstrap/dist/js/bootstrap.bundle';

const DashboardHomeUser = () => {
  let [modalMessage, setModal] = useState("");

  // function to display when the reply gets back
  const reply =  function(data) {
    const { message } = data;
    setModal(message);
    $("#myModal").modal({
      keyboard: true
    })
    $("#myModal").modal("show");
  };
  socket.on('reply', reply);

  // Sending the SOS button action
  function sendSOS() {
    // onsubmit function to relate with backend api for database purposes
    function SosPost(accidentLocation, description, userId) {
      const url =
        "https://covid-19-tos4christ.herokuapp.com/api/v1/on-covid-19/sos";
      const data = {
        userId,
        reportType: "SOS",
        lat: accidentLocation.lat,
        lon: accidentLocation.lon,
        description: description,
      };
      fetch(url, {
        method: "POST",
        mode: "cors",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((response) => response)
        .catch((e) => console.error(e));
    }
    function forwardToServer(accidentLocation, userId) {
      socket.emit("sos", { accidentLocation, userId });
      SosPost(accidentLocation, "Accident", userId);
    }
    function sendPosition(position) {
      const accidentLocation = {
        lat: position.coords.latitude,
        lon: position.coords.longitude,
      };
      const userId = localStorage.getItem("userId");
      forwardToServer(accidentLocation, userId);
    }
    function handleError(err) {
      const error = new Error("Device does not support geolocation");
      console.error(error.message, err);
    }
    // Try HTML5 geolocation
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(sendPosition, handleError);
    } else {
      const err = new Error("Device does not support geolocation");
      handleError(err);
    }
  }
  const sosStyle = {
    borderRadius: "50%",
    width: "100px",
    height: "100px",
    marginLeft: "auto",
    marginRight: "auto"
  };
  const body = (
    <div className="container-fluid">
      <div className='row' style={{ height: "1vh" }}>
        <button style={{display: "none"}} type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal">
          Open modal
        </button>
        <div class="modal" id="myModal">
          <div class="modal-dialog" >
            <div class="modal-content">
            
              <div class="modal-header">
                <h4 class="modal-title">Dear user</h4>
                <button type="button" class="close" data-dismiss="modal">&times;</button>
              </div>

              <div class="modal-body">
                {modalMessage}
              </div>

              <div class="modal-footer">
                <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
              </div>

            </div>
          </div>
        </div>
        <div className='col text-center text-success mt-5 pt-5 mb-0 pb-0'>
          <h2> Request for an emergency service below</h2>
          <form className="row">
            <div className="col-6 ml-auto mr-auto pt-3 form-group">
            <label for="description">Describe the help you need below or just press button for emergency and help would come</label>
              <input className="form-control" type="text" id="description" placeholder="Describe your situation"></input>
            </div>
          </form>
        </div>
      </div>
      <div style={{ height: "80vh" }} className="row">      
        <button
          type="button"
          className="my-auto"
          onClick={sendSOS}
          style={sosStyle}
        >
          S.O.S
        </button><br />
      </div>
    </div>
  );
  return <DashboardNavUser body={body} />;
};

export default DashboardHomeUser;
