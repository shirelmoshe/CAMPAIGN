import React, { useState } from "react";
import { addDonation } from "../../servers/servers";

export const Donation = (props) => {
  const [userMessage, setUserMessage] = useState({
    CompanyName: "",
    Product: "",
    CampaignName: "",
    Price: "",
    Email: "",
  });

  const handleAddMessage = async () => {
    let json = userMessage;
    await addDonation(json);
    setUserMessage({});
    document.querySelectorAll("input").forEach((input) => (input.value = ""));
  };

  return (
    <>
      <div className="input-group mb-3">
        <span className="input-group-text">CompanyName</span>
        <input
          className="form-control"
          type="text"
          onChange={(o) => {
            setUserMessage({ ...userMessage, CompanyName: o.target.value });
          }}
        />
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text">Product</span>
        <input
          className="form-control"
          type="text"
          onChange={(o) => {
            setUserMessage({ ...userMessage, Product: o.target.value });
          }}
        />
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text"> Email </span>
        <input
          className="form-control"
          type="email"
          onChange={(o) => {
            setUserMessage({ ...userMessage, Email: o.target.value });
          }}
        />
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text">Price:</span>
        <input
          className="form-control"
          type="text"
          onChange={(o) => {
            setUserMessage({ ...userMessage, Price: o.target.value });
          }}
          onKeyDown={(o) => {
            if (o.target.value.length >= 300) {
              o.preventDefault();
            }
          }}
        />
        <div className="input-group mb-3">
          <span className="input-group-text">CampaignName:</span>
          <input
            className="form-control"
            type="text"
            onChange={(o) => {
              setUserMessage({ ...userMessage, CampaignName: o.target.value });
            }}
            onKeyDown={(o) => {
              if (o.target.value.length >= 300) {
                o.preventDefault();
              }
            }}
          />
        </div>
        <button className="btn btn-secondary" onClick={handleAddMessage}>
          Send
        </button>
      </div>
    </>
  );
};

/*
export default function Donation() {
  const [CompanyName , setCompanyName] = useState(" ");
  const [Product, setproduct] = useState(" ");
  const [CampaignName, setCampaignName] = useState(" ");
  const [Email, setEmail] = useState(" ");
  const [Price, setPrice] = useState(" ");

  let hendleNewProduct = async () => {
    console.log(CompanyName, Product, CampaignName, Price, Email);
    await addPriceServers({
      CompanyName: CompanyName,
      Product: Product,
      CampaignName: CampaignName,
      Price: Price,
      Email: Email,
    });
  };
  return (
    <div className="donation">
      <div class="mb-3">
        <label for="formGroupExampleInput" class="form-label">
          Company Name
        </label>
        <input
          type="text"
          class="form-control"
          id="formGroupExampleInput"
          onChange={(e) => setCompanyName(e.target.value)}
          //placeholder="Example input placeholder"
        />
      </div>
      <div class="mb-3">
        <label for="formGroupExampleInput2" class="form-label">
          Product
        </label>
        <input
          type="text"
          class="form-control"
          id="formGroupExampleInput2"
          onChange={(e) => setproduct(e.target.value)}
          //placeholder="Another input placeholder"
        />
      </div>
      <div class="mb-3">
        <label for="formGroupExampleInput" class="form-label">
          Campaign Name
        </label>
        <input
          type="text"
          class="form-control"
          id="formGroupExampleInput"
          onChange={(e) => setCampaignName(e.target.value)}
          //placeholder="Example input placeholder"
        />
      </div>
      <div class="mb-3">
        <label for="formGroupExampleInput" class="form-label">
          Price
        </label>
        <input
          type="text"
          class="form-control"
          id="formGroupExampleInput"
          onChange={(e) => setPrice(e.target.value)}
          //placeholder="Example input placeholder"
        />
      </div>

      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">
          Email address
        </label>
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          onChange={(e) => setEmail(e.target.value)}
        />
        <div id="emailHelp" class="form-text">
          We'll never share your email with anyone else.
        </div>
      </div>
      <button className="btn btn-primary" onClick={hendleNewProduct}>
        Submit form
      </button>
    </div>
  );
}

*/
