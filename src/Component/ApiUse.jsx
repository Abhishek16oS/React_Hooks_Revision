import { use } from "react";

const url='https://jsonplaceholder.typicode.com/users';

const getUser=async()=>fetch(url).then((res)=>res.json());

const userData=getUser();
// console.log(userData);


export default function ApiUse(){
const finalData=use(userData)
// console.log(finalData);
    return(<>
    
            {
                finalData && Array.isArray(finalData) &&
                finalData.map((user,indx)=>(
                    <ul style={{listStyle:'none'}} key={indx}>
                    <li  >Name : {user.name}</li>
        <li >Email : {user.email}</li>
        <li >City : {user.address.city}</li>
        <li >Website : {user.website}</li>
        <li >Phone no : {user.phone}</li> 
                    </ul>
        

                ))
            }
      

     
    </>)
}