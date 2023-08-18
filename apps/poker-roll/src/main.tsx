import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// import Cashgame 
// import Bankroll 
// import Tournament 

import App from './app/app';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    loader: rootLoader,
    children: [
      {
        path: "/bankroll",
        element: <Bankroll />,
        loader: bankrollLoader,
      },
      {
        path: "/cashgame",
        element: <Cashgame />,
        loader: cashgameLoader,
      },
      {
        path: "/tournament",
        element: <Tournament />,
        loader: tournamentLoader,
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
