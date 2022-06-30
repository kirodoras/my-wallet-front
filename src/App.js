import { BrowserRouter, Routes, Route } from "react-router-dom"
import ResetCss from "./styles/ResetCss";
import GlobalCss from "./styles/GlobalCss";

import Login from "./components/Login";
import Register from "./components/Register";
import Transactions from "./components/Transactions";
import Input from "./components/Input";
import Output from "./components/Output";
import Error from "./components/Error";

export default function App() {
    return (
        <BrowserRouter>
            <ResetCss />
            <GlobalCss />
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/sign-up" element={<Register />} />
                <Route path="/transactions" element={<Transactions />} />
                <Route path="/input" element={<Input />} />
                <Route path="/output" element={<Output />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </BrowserRouter>
    );
}