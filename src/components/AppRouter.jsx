import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {publicRoutes, privateRoutes} from "./router";

const AppRouter = () => {
    const isAuth = true;

    return (
        isAuth
            ?   <Routes>
                    {privateRoutes.map(route =>
                        <Route path={route.path} element={route.element}></Route>
                    )}
                    <Route path="/*" element={<Navigate replace to="/posts" />} />
                </Routes>
            :   <Routes>
                    {publicRoutes.map(route =>
                        <Route path={route.path} element={route.element}></Route>
                    )}
                    <Route path="/*" element={<Navigate replace to="/login" />} />
                </Routes>

    );
};

export default AppRouter;