import React from 'react';
import { render } from 'react-dom';
import './styles.css';
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
// Route endpoints
import App from './App.jsx';
import Login from '../client/components/Login.jsx';
import SignUp from '../client/components/SignUp.jsx';
import LandingPage from '../client/components/LandingPage.jsx';



render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/app" element={<App />} />
        </Routes>
    </BrowserRouter>,

    document.getElementById('root')
);


// import { render } from "react-dom";
// import {
//   BrowserRouter,
//   Routes,
//   Route,
// } from "react-router-dom";
// // import your route components too

// render(
//   <BrowserRouter>
//     <Routes>
//       <Route path="/" element={<App />}>
//         <Route index element={<Home />} />
//         <Route path="teams" element={<Teams />}>
//           <Route path=":teamId" element={<Team />} />
//           <Route path="new" element={<NewTeamForm />} />
//           <Route index element={<LeagueStandings />} />
//         </Route>
//       </Route>
//     </Routes>
//   </BrowserRouter>,
//   document.getElementById("root")
// );