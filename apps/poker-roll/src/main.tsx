import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import SessionPage from "./app/sessionPage";
import Bankroll from "./app/bankrollPage";
import History from "./app/historyPage";
import Home from "./app/homePage";

import App from './app/app';
import { Session } from 'inspector';

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
        path: "/session",
        element: <SessionPage />,
        // loader: cashgameLoader,
      },
      {
        path: "/history",
        element: <History />,
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
