import { useState } from "react";
import { SubjectChoosen } from "./Component/Context Api/Start";
import University from "./Component/Context Api/University";

export default function App() {
  const [subject, setSubject] = useState('');
  
  return (
    <div>
      <SubjectChoosen.Provider value={subject}>
        <div>
          <label className="text-gray-900" htmlFor="Subjects">Choose a subject:</label>
          <select onChange={(e) => setSubject(e.target.value)} className="text-gray-950" name="" id="Subjects">
            <option value="">Choose Subject</option>
            <option value="English">English</option>
            <option value="Hindi">Hindi</option>
            <option value="IT">IT</option>
            <option value="Maths">Maths</option>
            <option value="Science">Science</option>
          </select>
        </div>
        <University />
      </SubjectChoosen.Provider>
    </div>
  );
}
















///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////




/* export default function App() {
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
} */

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
