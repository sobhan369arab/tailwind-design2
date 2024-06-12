import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import HomePage from "./Components/HomePage"

const Routers = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/HomePage" element={<HomePage />} />
                <Route path="/" element={<Navigate replace to="/HomePage" />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Routers