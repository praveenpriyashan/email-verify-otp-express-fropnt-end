// import react from "@vitejs/plugin-react-swc";
import './App.css'
import { Route, Routes} from "react-router-dom";
import Home from "./pages/Home.tsx";
import EmailVerify from "./pages/EmailVerify.tsx";
import PasswordReset from "./pages/PasswordReset.tsx";
import Login from "./pages/Login.tsx";

const App = () => {

    return (
        <div className={'text-2xl'}>
            <Routes>
                <Route path={'/'} element={<Home/>} />
                <Route path={'/login'} element={<Login/>} />
                <Route path={'/emailVerify'} element={<EmailVerify/>} />
                <Route path={'/resetPassword'} element={<PasswordReset/>} />
            </Routes>
        </div>
    )
}

export default App