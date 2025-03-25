import { useState } from "react";
import { useEffect } from "react";

export default function HookUseEffect(){
    const url='https://dummyjson.com/users';
const [user,setUser]=useState([]);
    useEffect(()=>{
        fetchData(url);
    },[])

// async function handleData(){
//     new Promise((res)=>setTimeout(res,2000))
//     fetchData(url)
// }

   async function fetchData(url){
    try {
        let res=await fetch(url);
        if(!res.ok){
            throw new Error('Data not fetched Successfully')
        }
        res=await res.json();
        setUser(res);
        
        
    } catch (error) {
        console.log(error);
    }
   }


    return(<div className="text-center">

       {
        user?.users && 
         user?.users.map((item)=>{
            return(
                <ul key={item?.id} className="my-4 ">
        <li>Firstname:{item?.firstName}</li>
        <li>Lastname:{item?.lastName}</li>
        <li>Age:{item?.age}</li>
        </ul>
            )
         })   
          
        
       }
        

    
        {/* <button onClick={()=>handleData()}  className="bg-blue-500 hover:bg-blue-400 cursor-pointer p-2 mt-4">Get Data</button> */}

    </div>)









}