import React, { useState } from "react";
import DashboardNavUser from "../components/Header/DashboardNavUser";
import socket from "../utility/socketioConnection";
import $ from "jquery";
import 'popper.js/dist/popper';
import 'bootstrap/dist/js/bootstrap.bundle';

const DashboardHomeUser = () => {
  let [modalMessage, setModal] = useState("");
  let [imageReport, setImage] = useState("");
  let [imageStyle, setStyle] = useState("hidden");
  let [description, setDescription] = useState("");

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
      const url = "https://road-master.herokuapp.com/api/v1/sos";
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
  function submitReport(e) {
    e.preventDefault();
    e.persist();
    function reportImage(position) {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      const userId = localStorage.getItem("userId");
      const formData = new FormData();
      formData.append('description', description);
      formData.append('image', e.target['imageReports'].files[0]);
      formData.append('lat', lat);
      formData.append('lon', lon);
      formData.append('userId', userId);
      const url = "https://road-master.herokuapp.com/api/v1/report/eyewitness";
      fetch(url, {
        method: "POST",
        mode: "cors",
        body: formData
      })
      .then(res => res.json())
      .then( response => {
        setImage("");
        setStyle("hidden");
        setDescription("");
      });
    }
    // Try HTML5 geolocation
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(reportImage, handleError);
    } else {
      const err = new Error("Device does not support geolocation");
      handleError(err);
    }
    function handleError(err) {
      const error = new Error("Device does not support geolocation");
      console.error(error.message, err);
    }
  }
  function setDesc(e) {
    setDescription(e.target.value)
  }
  function showImage(e) {
    if(e.target.files[0]) {
      const path = URL.createObjectURL(e.target.files[0]);
      setImage(path);
      setStyle("")
    } else if(!e.target.files[0]) {
      setImage("");
      setStyle("hidden");
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
        <button style={{display: "none"}} type="button" className="btn btn-primary" data-toggle="modal" data-target="#myModal">
          Open modal
        </button>
        <div className="modal" id="myModal">
          <div className="modal-dialog" >
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">Dear user</h4>
                <button type="button" className="close" data-dismiss="modal">&times;</button>
              </div>
              <div className="modal-body">
                {modalMessage}
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
        <div className='col text-center text-success mt-5 pt-5 mb-0 pb-0 imageReports'>
          <h2> Request for an emergency service below</h2>
          <form className="row" encType="multipart/form-data" name="reports" onSubmit={submitReport}>
              <div className="col-6 ml-auto mr-auto pt-3 form-group">
                <label htmlFor="description">Describe the help you need below or just press button for emergency and help would come</label>
                <input className="form-control" type="text" id="description" onChange={setDesc} placeholder="Describe the situation"></input>
                <label> Upload a picture of the scene</label><br/>
                <input type='file' name='imageReports' onChange={showImage} accept="image/jpg" /><br />
                <img src={imageReport} style={{display: imageStyle, height: "10vh"}} alt=""/>
                <button className='button ml-3 mt-3' type='submit'> Upload your image report </button>
              </div>
          </form>
        </div>
      </div>
      <div style={{ height: "80vh", marginTop: '150px' }} className="row">
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
