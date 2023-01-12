import { Routes, Route } from "react-router-dom";
//import { Redirect } from "react-router-dom";
import React from "react";
import { Home } from "./components/pages/Home/Home";
import "./App.css";
import { Donation } from "./components/pages/Donation/Donation.jsx";
import { CreatingCampaign } from "./components/pages/CreatingCampaign/CreatingCampaign";
import { CompanyOwnerUser } from "./components/pages/companyOwnerUser/companyOwnerUser";
import Navbar from "./components/Navbar/Navbar";
import { Campaigns } from "./components/pages/campaigns/campaigns";
import { SingUp } from "./components/pages/SignUp/SignUp.jsx";
//import { ProductInfo } from "./components/pages/oneProduct/oneProduct";
import { Products } from "./components/pages/Products/products";
import { useState } from "react";
import { ProductData } from "./components/productData/ProductInfo.jsx";
import { UserContext } from "./components/context/context";
import { SalesTable } from "./components/pages/Sales/sales.jsx";
import { UsersTable } from "./components/pages/Users/user";

export const App = () => {
  const [product, setProduct] = useState({});
  return (
    <div className="App">
      <Navbar />
      <UserContext.Provider value={{ product, setProduct }}>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/donation" element={<Donation />}></Route>
          <Route
            path="/creatingCampaign"
            element={<CreatingCampaign />}
          ></Route>
          <Route
            path="/CompanyOwnerUser"
            element={<CompanyOwnerUser />}
          ></Route>
          <Route path="/Campaigns" element={<Campaigns />}></Route>
          <Route path="/Sales" element={<SalesTable />}></Route>
          <Route path="/SingUp" element={<SingUp />}></Route>
          <Route path="/Products" element={<Products />}></Route>
          <Route path="/User" element={<UsersTable />}></Route>

          <Route
            path={`/Products/${product.productsId}`}
            element={
              <ProductData
                productId={product.productsId}
                CompanyName={product.CompanyName}
                Product={product.Product}
                Price={product.Price}
                CampaignName={product.CampaignName}
              />
            }
          />
        </Routes>
      </UserContext.Provider>
    </div>
  );
};

export default App;
/*export const App = () => {
  const { isAuthenticated, isLoading } = useAuth0();
  if (!isLoading) {
    return (
      //<div className="App">{isAuthenticated ? <Main /> : <LoginButton />}</div>
    );
  } else {
    return "Loading";
  }
};
*/
