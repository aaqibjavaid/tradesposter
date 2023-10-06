import { configureStore } from "@reduxjs/toolkit";
import React from "react";
import * as ReactDOMClient from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "react-tippy/dist/tippy.css";
import "react-toastify/dist/ReactToastify.css";
import { applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import "swiper/css/bundle";
import App from "./App";
import { AuthProvider } from "./context/AuthProvider";
import "./index.css";

import combineReducers from "./Redux/RootReducer";

import "primeicons/primeicons.css";
import "primereact/resources/primereact.min.css"; //core css
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = configureStore(
  { reducer: combineReducers },
  composeEnhancer(applyMiddleware(thunk))
);
const queryClient = new QueryClient();
const root = ReactDOMClient.createRoot(document.getElementById("root"));
root.render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Provider store={store}>
        <AuthProvider>
          <Routes>
            <Route path="/*" element={<App />} />
          </Routes>
        </AuthProvider>
      </Provider>
    </BrowserRouter>
    <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
  </QueryClientProvider>
);
