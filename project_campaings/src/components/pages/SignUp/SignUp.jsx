import React, { useState } from "react";
import { addUserServers } from "../../servers/servers";

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

  return (
    <div className="student-inputs ">
      <div className="input-group mb-3">
        <span className="input-group-text">association Name</span>
        <input
          className="form-control"
          type="text"
          onChange={(o) => {
            setUserMessage({ userName: o.target.value });
          }}
        />
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text">hashtag</span>
        <input
          className="form-control"
          type="text"
          onChange={(o) => {
            setUserMessage({ cellphoneNumber: o.target.value });
          }}
        />
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text">Email</span>
        <input
          className="form-control"
          type="email"
          onChange={(o) => {
            setUserMessage({ email: o.target.value });
          }}
        />
        <div>
          <select onChange={handleSelectChange}>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
          <p>Selected value: {selectedValue}</p>
        </div>
      </div>
    </div>
  );
};
