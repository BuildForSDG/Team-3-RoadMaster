import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import ls from 'local-storage';
// import fetchJsonp from 'fetch-jsonp';
import Text from "../components/Inputs/Text";
import Button from "../components/Inputs/Button";
import Link from "../components/Inputs/Links";

const Register = () => {
  const history = useHistory();
  let [name, setName] = useState("");
  let [age, setAge] = useState("");
  let [state, setState] = useState("");
  let [city, setCities] = useState("");
  let [bloodType, setBloodType] = useState({});
  let [kinNum, setKinNum] = useState("Click to Add Geolocation");
  let [emNum, setNum] = useState("");
  let [Killness, setKillness] = useState("");
  let [genotype, setGenotype] = useState("");
  let [email, setEmailing] = useState("");
  let [password, setPass] = useState("");
  let [lga, setLga] = useState("");
  let [resAdd, setresAdd] = useState("");
  // const match = useRouteMatch();
  
  const changeName = (name) => {
    setName(name);
  }
  const changeAge = (age) => {
    setAge(age);
  }
  const setCity = (city) => {
    setCities(city);
  }
  const changeBloodType = (btype) => {
    setBloodType(btype);
  }
  const changeKinNum = (kNum) => {
    setKinNum(kNum);
  }
  const emNumber = (num) => {
    setNum(num);
  }
  const changeKillness = (killness) => {
    setKillness(killness);
  }
  const changeGenotype = (genotype) => {
    setGenotype(genotype);
  }
  const setEmail = (email) => {
    setEmailing(email);
  }
  const setPassword = (password) => {
    setPass(password);
  }
  const changeLga = (lga) => {
    setLga(lga);
  }
  const changeRes = (resAdd) => {
    setresAdd(resAdd);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const url = "https://covid-19-tos4christ.herokuapp.com/api/v1/on-covid-19/signup";
    const data = {
      name,
      state,
      city,
      emergencyNumber: emNum,
      email,
      password,
      age,
      bloodType,
      genotype,
      nextofkinNum: kinNum,
      knownIllnesses: Killness,
      lga,
      residentialAdd: resAdd
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
      ls.set('token', response.data.token);
      // This would push to the signin page for the user to now login
      history.push(`/user-login`);
    })
    .catch( e => console.error(e));
  }
  return (
    <div className="py-4 responders-bg container-fluid bg-light">
      <div className="row my-4">
        <div className="col-sm-4 mx-auto mt-4 pt-4 bg-white shadow">
          <div className="signup-bg-user"></div>
          <form className="mt-3" onSubmit={handleSubmit} autoComplete="on">
            <Text
              placeholder="Names"
              type="text"
              name={name}
              nameChange={ changeName }
              icon="fa fa-user"
            />
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
            <Text
              placeholder="LGA"
              type="text"
              name="lga"
              icon="fa fa-map-marker"
              nameChange={changeLga}
            />
            <Text
              placeholder="Age"
              type="text"
              name="age"
              icon="fa fa-map-marker"
              nameChange={changeAge}
            />
            <Text
              placeholder="Genotype"
              type="text"
              name="genotype"
              icon="fa fa-map-marker"
              nameChange={changeGenotype}
            />
            <Text
              placeholder="Next of Kin's Number"
              type="text"
              name="kinNum"
              icon="fa fa-map-marker"
              nameChange={changeKinNum}
            />
            <Text
              placeholder="Residential Address"
              type="text"
              name="resAdd"
              icon="fa fa-map-marker"
              nameChange={changeRes}
            />
            <Text
              placeholder="Known Illness"
              type="text"
              name="killness"
              icon="fa fa-map-marker"
              nameChange={changeKillness}
            />
            <Text
              placeholder="Blood Type"
              type="text"
              name="btype"
              icon="fa fa-map-marker"
              nameChange={changeBloodType}
            />
            <Text
              placeholder="Emergency Number"
              type="number"
              name="number"
              icon="fa fa-phone"
              nameChange={emNumber}
            />
            <Text
              placeholder="User Email"
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
            <Link
              question="Already Registered? "
              link="Login"
              linkTo="/user-login"
            />
            <Button text="Sign Up" />
          </form>          
        </div>
      </div>
    </div>
  );
};

export default Register;
