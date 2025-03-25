import React from "react";
import { Route, Routes } from "react-router-dom";
import { LandingPage } from "../pages/LandingPage";
import { BoardsPage } from "../pages/BoardsPage";

export const AppRoutes: React.FC = ()=> {
    return(
        <Routes>
            <Route path="/landing" element={<LandingPage />} />
            <Route path="/board" element={<BoardsPage />} />
        </Routes>
    );
};