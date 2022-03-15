import React from "react";
import { Route } from "react-router-dom";
import ThankYouPage from "./ThankuPage";

const Index = () =>{
    return(
        <>
          <Route path="/createfleet/thankupage/v" element={<ThankYouPage />} />
        </>
    )
};

export default Index;