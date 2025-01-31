import { BuyingProvider } from "@/Context/BuyingContext";
import { Navbar } from "@/sharedComponents/OneTimeUsed/Navbar";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "../Home";
import { ProductView } from "../ProductView";
import { FilterBar } from "@/sharedComponents/OneTimeUsed/sections/Products/FilterBar";

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