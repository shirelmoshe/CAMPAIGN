import axios from "axios";

export const addDonation = async (userComment) => {
  console.log(userComment);

  await axios.post("http://localhost:7200/api/Function1/donation", userComment);
};

export const addCanpaignServers = async (userComment) => {
  console.log(userComment);

  await axios.post(
    "http://localhost:7200/api/Function1/creatingCampaign",
    userComment
  );
};
export const addUserServers = async (userComment) => {
  console.log(userComment);

  await axios.post("http://localhost:7200/api/Function1/SingUp", userComment);
};
export const getCampaigns = async () => {
  try {
    let results = await fetch("http://localhost:7200/api/Function1/Campaigns");
    if (!results.ok) {
      throw new Error(`HTTP error! status: ${results.status}`);
    }
    let response = await results.json();
    return response;
  } catch (error) {
    console.error("DONT");
  }
};

export const getProductFullInfo = async (userId) => {
  let results = await fetch(
    `http://localhost:7200/api/Function1/campaigns?ProductID=${userId}`
  );
  let response = await results.json();
  return response;
};
