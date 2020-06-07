import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
// import fetchJsonp from 'fetch-jsonp';
import Text from "../components/Inputs/Text";
import Button from "../components/Inputs/Button";
import Link from "../components/Inputs/Links";

const Register = () => {
  const history = useHistory();
  let [name, setName] = useState("");
  let [desg, setDesignation] = useState("");
  let [state, setState] = useState("");
  let [city, setCities] = useState("");
  let [geoLocation, setGeolocation] = useState({});
  let [buttonText, setButtonText] = useState("Click to Add Geolocation");
  let [emNum, setNum] = useState("");
  let [email, setEmailing] = useState("");
  let [password, setPass] = useState("");
  // let [name, setName] = useState("");
  // const match = useRouteMatch();
  

  const changeName = (name) => {
    setName(name);
  }
  const setCity = (city) => {
    setCities(city);
  }
  const setGeo = (e) => {
    e.preventDefault();
    function getPosition(position) {
      const accidentLocation = {
        lat: position.coords.latitude,
        lon: position.coords.longitude
      }
      setGeolocation(accidentLocation);
      setButtonText('Added Successfully! Thanks')
    }
    function errorPosition(err) {
      const error = new Error('Device does not support geolocation');
      console.error(error.message, err.message);
    }
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        getPosition,
        errorPosition
      )
    } else return;
  }
  const emNumber = (num) => {
    setNum(num);
  }
  const setEmail = (email) => {
    setEmailing(email);
  }
  const setPassword = (password) => {
    setPass(password);
  }
  const setPassworded = (password) => {
    return true;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const url = "https://covid-19-tos4christ.herokuapp.com/api/v1/on-covid-19/responder";
    const data = {
      nameOfUnit: name,
      designation: desg,
      state,
      city,
      emergencyNumber: emNum,
      email,
      password,
      lat: geoLocation.lat,
      lon: geoLocation.lon
    }
    fetch(url, {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then( (res) => res.json())
    .then( (response) => {     
      // This would push to the signin page for the user to now login
      history.push(`/login`);
    })
    .catch( e => console.log(e));
  }
  return (
    <div className="py-4 responders-bg container-fluid bg-light">
      <div className="row my-4">
        <div className="col-sm-4 mx-auto mt-4 pt-4 bg-white shadow">
          <div className="signup-bg"></div>
          <form className="mt-3" onSubmit={handleSubmit} autoComplete="on">
            <Text
              placeholder="Name of Unit"
              type="text"
              name={name}
              nameChange={ changeName }
              icon="fa fa-user"
            />
            <div className="input-group mb-3 border-bottom">
              <select onChange={ e => setDesignation(e.target.value) } className="form-control custom-select border-0 ">
                <option>Choose Designation</option>
                <option>Health Workers</option>
                <option>Security Personnels</option>
                <option>Fire Service</option>
              </select>
              <div className="input-group-append">
                <span
                  className="input-group-text bg-none border-0"
                  id="basic-addon2"
                >
                  <span className="fa fa-newspaper-o"></span>
                </span>
              </div>
            </div>
            <div className="input-group mb-3 border-bottom">
              <select
                className="form-control custom-select border-0"
                required
                name="stateOfO"
                onChange={ e => setState(e.target.value)}
              >
                <option value="">State</option>
                <option value="Abia">Abia</option>
                <option value="Adamawa">Adamawa</option>
                <option value="AkwaIbom">AkwaIbom</option>
                <option value="Anambra">Anambra</option>
                <option value="Bauchi">Bauchi</option>
                <option value="Bayelsa">Bayelsa</option>
                <option value="Benue">Benue</option>
                <option value="Borno">Borno</option>
                <option value="Cross River">Cross River</option>
                <option value="Delta">Delta</option>
                <option value="Ebonyi">Ebonyi</option>
                <option value="Edo">Edo</option>
                <option value="Ekiti">Ekiti</option>
                <option value="Enugu">Enugu</option>
                <option value="FCT">FCT</option>
                <option value="Gombe">Gombe</option>
                <option value="Imo">Imo</option>
                <option value="Jigawa">Jigawa</option>
                <option value="Kaduna">Kaduna</option>
                <option value="Kano">Kano</option>
                <option value="Katsina">Katsina</option>
                <option value="Kebbi">Kebbi</option>
                <option value="Kogi">Kogi</option>
                <option value="Kwara">Kwara</option>
                <option value="Lagos">Lagos</option>
                <option value="Nasarawa">Nasarawa</option>
                <option value="Niger">Niger</option>
                <option value="Ogun">Ogun</option>
                <option value="Ondo">Ondo</option>
                <option value="Osun">Osun</option>
                <option value="Oyo">Oyo</option>
                <option value="Plateau">Plateau</option>
                <option value="Rivers">Rivers</option>
                <option value="Sokoto">Sokoto</option>
                <option value="Taraba">Taraba</option>
                <option value="Yobe">Yobe</option>
                <option value="Zamfara">Zamafara</option>
              </select>
              <div className="input-group-append">
                <span
                  className="input-group-text bg-none border-0"
                  id="basic-addon2"
                >
                  <span className="fa fa-university"></span>
                </span>
              </div>
            </div>
            <Text
              placeholder="City"
              type="text"
              name="city"
              icon="fa fa-map-marker"
              nameChange={setCity}
            />
            <Button
              text={buttonText}
              onClick={setGeo}
            />
            <Text
              placeholder="Emergency Number"
              type="number"
              name="number"
              icon="fa fa-phone"
              nameChange={emNumber}
            />
            <Text
              placeholder="Official Email"
              type="email"
              name="email"
              icon="fa fa-envelope"
              nameChange={setEmail}
            />
            <Text
              placeholder="Password"
              type="password"
              name="paassword1"
              icon="fa fa-lock"
              nameChange={setPassword}
            />
            <Text
              placeholder="Re-enter password"
              type="password"
              name="paassword2"
              icon="fa fa-lock"
              nameChange={setPassworded}
            />

            <Link
              question="Already Registered? "
              link="Login"
              linkTo="/login"
            />
            <Button text="Sign Up" />
          </form>          
        </div>
      </div>
    </div>
  );
};

export default Register;
