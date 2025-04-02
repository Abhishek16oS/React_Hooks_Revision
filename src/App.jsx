import { Route, Routes,Navigate,NavLink } from "react-router";
import Home from "./Component/React Router/Home";
import NavBar from "./Component/React Router/NavBar";
import User from "./Component/React Router/User";
import College from "./Component/React Router/College";
import Subject from "./Component/React Router/Subject";
import Student from "./Component/React Router/Student";
import Department from "./Component/React Router/Department";


export default function App() {
  return (
    <div>
      <NavLink></NavLink>

      <Routes>
        
          <Route element={<NavBar></NavBar>}>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/user" element={<User></User>}></Route>
          </Route>
        

        <Route path="/college" element={<College></College>}>
          <Route index element={<Department></Department>}></Route>
          <Route path="student" element={<Student></Student>}></Route>
          <Route path="subject" element={<Subject></Subject>}></Route>
        </Route>

        <Route path="/*" element={<Navigate to={"/"}></Navigate>}></Route>
      </Routes>
    </div>
  );
}

/* 

import { useState } from "react";
import { Suspense } from "react";
import { lazy } from "react"


const LazyLoading=lazy(()=>import('./Component/LazyLoading'));
export default function App(){
  const[load,setLoad]=useState(false);
  function handleLoad(){
    setLoad(true)
  }
  return(<div>
      <h1>Lazy Loading</h1>
      {
        load && <Suspense fallback={<p>Loading....</p>}>
      <LazyLoading></LazyLoading>
    </Suspense>
      }
   <button onClick={()=>handleLoad()} >Load User</button>
  </div>)
} */
