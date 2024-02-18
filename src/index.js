import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link,
} from "react-router-dom";
import Vacancy from "./components/vacancy/vacancy";

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <div>
                <App/>
            </div>
        ),
    },
    {
        path: "job",
        element: <Vacancy/>,
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router}/>
);
reportWebVitals();
