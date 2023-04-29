import React from 'react';
import {createBrowserRouter} from "react-router-dom";
import Main from "./component/Main";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ForgotPassword from "./pages/ForgotPassword";
import FindEmail from "./pages/FindEmail";

const Router = createBrowserRouter([
    {
        path : "/",
        element : <Main />
    },
    {
        path : "/login",
        element : <Login />
    },
    {
        path : "/signup",
        element : <SignUp />
    },
    {
        path : "/forgot/password",
        element : <ForgotPassword />
    },
    {
        path : "/find/email",
        element : <FindEmail />
    }
])

export default Router;