import { use } from "react";
import { Suspense } from "react";

const url='https://jsonplaceholder.typicode.com/posts?_limit=10';

const fetchData=()=>fetch(url).then(res=>res.json());//always use use it outside
//becuase if  u use it inside then it may rendered the same thing again and again
// console.log(fetchData());//this return a promise

const userResource=fetchData();

export default function HookUse(){
    return(<div>
    <Suspense fallback={<h3>Data Loading.....</h3>}>
        <User userResource={userResource} ></User>
        
    </Suspense>
    </div>)
  }



  //direct bhi use kar skatw hai userResource
  function User({userResource}){
    // console.log(userResource);//still a promise
    const userData=use(userResource);
    // console.log(userData);
    return<><h1>User  List</h1>
    {
        userData?.map(user=>{
            return(<ul style={{listStyle:'none'}} key={user.id}>
                <li>{user.id}</li>
                <li>{user.title}</li>
            </ul>)
        })
    }
    </>
  }