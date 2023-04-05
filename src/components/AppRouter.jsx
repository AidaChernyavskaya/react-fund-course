import React, {useContext} from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {publicRoutes, privateRoutes} from "./router";
import {AuthContext} from "../context";
import Loader from "./UI/Loader/Loader";

const AppRouter = () => {
    const {isAuth, isLoading} = useContext(AuthContext);

    if(isLoading){
        return <Loader/>
    }

    return (
        isAuth
            ?   <Routes>
                    {privateRoutes.map(route =>
                        <Route path={route.path} element={route.element} key={route.path}></Route>
                    )}
                    <Route path="/*" element={<Navigate replace to="/posts" />} />
                </Routes>
            :   <Routes>
                    {publicRoutes.map(route =>
                        <Route path={route.path} element={route.element} key={route.path}></Route>
                    )}
                    <Route path="/*" element={<Navigate replace to="/login" />} />
                </Routes>

    );
};

export default AppRouter;