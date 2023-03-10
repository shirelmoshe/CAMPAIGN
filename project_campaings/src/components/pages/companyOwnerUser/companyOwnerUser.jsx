import React from "react";
import "./companyOwnerUser.css";

export const CompanyOwnerUser = ({
  email,
  userId,
  cellphoneNumber,
  companyName,
  numRowe,
}) => {
  return (
    <div class="card">
      <img src="..." class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">{email}</li>-{" "}
        <li class="list-group-item">{cellphoneNumber}</li>
        <li class="list-group-item">{companyName}</li>
        <li class="list-group-item">{numRowe}</li>
      </ul>
      <div class="card-body">
        <a href="/donation" class="card-link">
          Card link
        </a>
      </div>
    </div>
  );
};
