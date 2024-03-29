import React from 'react';
import {Route, Routes, Navigate} from "react-router-dom";
import {routes} from "../routes";
import {HOME_ROUTE} from "../utils/consts";

const AppRouter = () => {
    return (
        <Routes>
            {routes.map(({path, Component, exact}) =>
                <Route path={path}
                       element={<Component/>}
                       key={path}
                />
            )}
            <Route path={'*'} element={<Navigate to={HOME_ROUTE} replace/>}/>
        </Routes>
    );
};

export default AppRouter;