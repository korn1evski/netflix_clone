import Navbar from "./ components/Navbar";
import {Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import {AuthContextProvider} from "./context/AuthContext";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Account from "./pages/Account";
import ProtectedRoute from "./ components/ProtectedRoute";

function App() {
    return (
        <>
            <AuthContextProvider>
                <Navbar/>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/signIn' element={<ProtectedRoute showToLogged={false}><SignIn/></ProtectedRoute>}/>
                    <Route path='/signUp' element={<ProtectedRoute showToLogged={false}><SignUp/></ProtectedRoute>}/>
                    <Route path='/account' element={<ProtectedRoute showToLogged={true}><Account/></ProtectedRoute>}/>
                </Routes>
            </AuthContextProvider>
        </>
    );
}

export default App;
