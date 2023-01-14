import React from "react";
import { Routes, Route } from "react-router-dom";

import { Battleground, CreateBattle, Battle, Home, JoinBattle } from "../Views/Index"

const MainRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
        <Route path="/battleground" element={<Battleground />} />
        <Route path="/battle/:battleName" element={<Battle />} />
        <Route path="/create-battle" element={<CreateBattle />} />
        <Route path="/join-battle" element={<JoinBattle />} />
        </Routes>
    )
}

export default MainRoutes