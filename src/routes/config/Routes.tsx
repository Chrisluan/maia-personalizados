import React from "react";
import Home from "../Home";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ProductView } from "../ProductView";
import { Navbar } from "@/sharedComponents/OneTimeUsed/Navbar";
import { BuyingProvider } from "@/Context/BuyingContext";

const AppRoutes = () => {

    return (
        
        <BuyingProvider>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/produto/:id" element={<ProductView />} />

                </Routes>
            </Router>
        </BuyingProvider>
    )
}
export default AppRoutes;