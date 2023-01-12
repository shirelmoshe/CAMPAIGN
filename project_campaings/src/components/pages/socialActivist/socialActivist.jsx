import React from "react";

export const socialActivist = ({
  email,
  userId,
  cellphoneNumber,
  companyName,
  userName,
}) => {
  return (
    <div class="card">
      <img src="..." class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">userName</h5>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">{email}</li>-{" "}
        <li class="list-group-item">{cellphoneNumber}</li>
        <li class="list-group-item">{companyName}</li>
      </ul>
    </div>
  );
};
