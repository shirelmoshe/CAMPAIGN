import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { UserContext } from "../context/context";
import { GetRoles } from "./../servers/servers";
import { Home } from "../pages/Home/Home";
import { CreatingCampaign } from "./../pages/CreatingCampaign/CreatingCampaign";
import { Campaigns } from "./../pages/campaigns/campaigns";
import { Navbar } from "./../Navbar/Navbar";
import { Products } from "./../pages/Products/products";
import { ProductInfo } from "./../pages/oneProduct/oneProduct";
import { Donation } from "./../pages/Donation/Donation";
import { SingUp } from "./../pages/SignUp/SignUp";
import { CompanyOwnerUser } from "./../pages/companyOwnerUser/companyOwnerUser";

export const Main = () => {
  const { user } = useAuth0();
  const [role, setRole] = useState([]);

  let userId = user.sub;
  const handleRoles1 = async () => {
    let roles = await GetRoles(userId);

    setRole(roles);
  };
  useEffect(() => {
    handleRoles1();
  }, []);

  return (
    <>
      <Navbar />
      <UserContext.Provider value={{ role }}>
        {role.length > 0 ? (
          role.map((userrole) => {
            if (userrole.name === "Association representative")
              return AssociationRepresentative();
            else if (userrole.name === "Social Activists")
              return SocialActivists();
            else if (userrole.name === "Company owner") return companyOwner();
            else if (userrole.name === "Admin") return Admin();
            else return <Home />;
          })
        ) : (
          <>LODING</>
        )}
      </UserContext.Provider>
    </>
  );
};

const AssociationRepresentative = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/creatingCampaign" element={<CreatingCampaign />}></Route>
      <Route path="/Campaigns" element={<Campaigns />}></Route>
      <Route path="/SingUp" element={<SingUp />}></Route>
      <Route path="/Products" element={<Products />}></Route>
      <Route path="/productsId/:productsId" element={<ProductInfo />}></Route>
    </Routes>
  );
};

const companyOwner = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/donation" element={<Donation />}></Route>
      <Route path="/CompanyOwnerUser" element={<CompanyOwnerUser />}></Route>
      <Route path="/Campaigns" element={<Campaigns />}></Route>
      <Route path="/SingUp" element={<SingUp />}></Route>
      <Route path="/Products" element={<Products />}></Route>
      <Route path="/productsId/:productsId" element={<ProductInfo />}></Route>
    </Routes>
  );
};

const SocialActivists = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/Campaigns" element={<Campaigns />}></Route>
      <Route path="/SingUp" element={<SingUp />}></Route>
      <Route path="/Products" element={<Products />}></Route>
      <Route path="/productsId/:productsId" element={<ProductInfo />}></Route>
      <Route path="/contactUs" />
    </Routes>
  );
};

const Admin = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/Campaigns" element={<Campaigns />}></Route>
      <Route path="/SingUp" element={<SingUp />}></Route>
      <Route path="/Products" element={<Products />}></Route>
      <Route path="/productsId/:productsId" element={<ProductInfo />}></Route>
    </Routes>
  );
};
