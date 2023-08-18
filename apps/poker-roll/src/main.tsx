import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Cashgame from "./app/cashgamePage";
import Bankroll from "./app/bankrollPage";
import Tournament from "./app/tournamentPage";
import Home from "./app/homePage";

import App from './app/app';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    // loader: rootLoader,
    children: [
      {
        path: "/bankroll",
        element: <Bankroll />,
        // loader: bankrollLoader,
      },
      {
        path: "/cashgame",
        element: <Cashgame />,
        // loader: cashgameLoader,
      },
      {
        path: "/tournament",
        element: <Tournament />,
        // loader: tournamentLoader,
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
  <RouterProvider router={router} />
  </StrictMode>
);
