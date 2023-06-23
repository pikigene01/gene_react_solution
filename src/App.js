import React,{useState,useEffect} from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";
import { apihost, getDataSites } from "./services/api";
import WholeApp from "./pages/WholeApp";
import AppProvider from "./contexts/AppProvider";

axios.defaults.baseURL = apihost;
// axios.defaults.headers.post["content-type"] = "application/json";
// // axios.defaults.headers.post["content-type"] = "multipart/form-data: boundary=add-random-characters";
// axios.defaults.headers.post["Accept"] = "application/json";

axios.defaults.withCredentials = false;
axios.interceptors.request.use(function (config) {
  const token = localStorage.getItem("gene-token");
  config.headers.Authorization = token ? `Bearer ${token}` : "";
  return config;
});



function App() {

  return (
    <AppProvider>
    <Router>
      <Routes>
        <Route exact path="/" element={<WholeApp />}/>
        <Route exact path="*" element={<WholeApp />}/>
       </Routes>
    </Router>
    </AppProvider>
  );
}

export default App;

