import React from "react"
import { Routes, Route } from "react-router-dom"

import { Battleground, CreateBattle, Battle, Home, JoinBattle } from "../Views/Index"

const MainRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Battleground" element={<Battleground />} />
            <Route path="/Battle/:battleName" element={<Battle />} />
            <Route path="/CreateBattle" element={<CreateBattle />} />
            <Route path="/JoinBattle" element={<JoinBattle />} />
        </Routes>
    )
}

export default MainRoutes