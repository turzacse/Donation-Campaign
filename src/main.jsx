import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './Components/ErrorPage/ErrorPage.jsx';
import Root from './Components/Root/Root.jsx';
import DonationDetails from './Components/DonationDetails/DonationDetails.jsx';
import Donated from './Components/Donated/Donated.jsx';
import Statistics from './Components/Statistics/Statistics.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root> ,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <App></App>
      },
      {
        path: '/donation/:id',
        element: <DonationDetails></DonationDetails>,
        loader: () => fetch('../donation.json')
      },
      {
        path: '/donation',
        element: <Donated></Donated>,
        loader: () => fetch('../donation.json')
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>,
        loader: () => fetch('../donation.json')
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
