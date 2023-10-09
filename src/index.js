import React from 'react';
import './index.css'
import 'bootstrap/js/dist/util';
import 'bootstrap/js/dist/dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom/client';
import Home from './view/Home/Home'
import Posts from './view/Posts/Posts'
import PostRead from './view/PostRead/PostRead';
import {createBrowserRouter,RouterProvider} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element:<Posts/>,
  },
  {
    path: "/posts/",
    element: <Posts/>,
  },
  {
    path: "/posts/postread/:id",
    element: <PostRead/>,
  },
  {
    path: "*",
    element: <h1>404 Not Found</h1>
  }

]);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <RouterProvider router={router} />

);


