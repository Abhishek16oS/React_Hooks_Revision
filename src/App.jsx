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
}
