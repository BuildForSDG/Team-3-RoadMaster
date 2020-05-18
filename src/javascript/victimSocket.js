/* eslint-disable no-undef */
$(() => {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function xhrSend() {
    if (this.readyState === 4 && this.status === 200) {
      return (xhr.statusText);
    }
    return 'still loading';
  };
  const url = 'http://localhost:3001/sos';
  const formdata = new FormData();

  // make connection
  const socket = io.connect('https://covid-19-tos4christ.herokuapp.com/');

  // victim button to send SOS to response and display div for response from server
  const sendSOS = $('#sendSOS');
  const display = $('#display');

  // onsubmit function to relate with backend api for database purposes
  function sos(accidentLocation, userID) {
    xhr.open('POST', url, true);
    formdata.append(accidentLocation);
    formdata.append(userID);
    xhr.send();
  }

  function forwardToServer(accidentLocation, userID) {
    socket.emit('sos', { accidentLocation, userID });
    sos();
  }

  function sendPosition(position) {
    const accidentLocation = {
      lat: position.coords.latitude,
      lng: position.coords.longitude
    };
    const userID = 1234;
    forwardToServer(accidentLocation, userID);
  }

  function handleError(err) {
    const error = new Error('Device does not support geolocation');
    return (error.message, err);
  }

  socket.on('reply', (data) => {
    // alert('message has arrived');
    display.append(data.message);
  });

  sendSOS.click((event) => {
    event.preventDefault();
    // Try HTML5 geolocation
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        sendPosition,
        handleError
      );
    } else {
      handleError(err);
    }
  });
});
