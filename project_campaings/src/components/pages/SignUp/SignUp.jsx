import React, { useState } from "react";
import { addUserServers } from "../../servers/servers";
import "./SignUp.css";

export const SingUp = (props) => {
  const [userMessage, setUserMessage] = useState({
    userName: "",
    cellphoneNumber: "",
    email: "",
    UserType: "",
  });

  const handleAddUser = async () => {
    let json = userMessage;
    await addUserServers(json);
    setUserMessage({});
    document.querySelectorAll("input").forEach((input) => (input.value = ""));
  };
  const handleSelectChange = (event) => {
    setUserMessage({ ...userMessage, UserType: event.target.value });
  };

  return (
    <div className="student-inputs ">
      <div className="input-group mb-3">
        <span className="input-group-text">User name</span>
        <input
          className="form-control"
          type="text"
          onChange={(o) => {
            setUserMessage({ ...userMessage, userName: o.target.value });
          }}
        />
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text">CellphoneNumber</span>
        <input
          className="form-control"
          type="text"
          onChange={(o) => {
            setUserMessage({ ...userMessage, cellphoneNumber: o.target.value });
          }}
        />
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text">Email</span>
        <input
          className="form-control"
          type="email"
          onChange={(o) => {
            setUserMessage({ ...userMessage, email: o.target.value });
          }}
        />
      </div>
      <div>
        <select onChange={handleSelectChange}>
          <option value="Association representative">
            Association representative
          </option>
          <option value="business company">business company</option>
          <option value="social activist">social activist</option>
        </select>
        <button className="btn btn-secondary" onClick={handleAddUser}>
          SAND
        </button>
      </div>
    </div>
  );
};
