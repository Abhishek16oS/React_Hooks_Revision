import { Outlet } from "react-router";
import { NavLink } from "react-router";

export default function College(){
    return(<div>
        <h3 className="text-bold text-md text-center  mb-3 pt-3 underline"><NavLink to={'/'}>link to Home page</NavLink></h3>
        <ul className="flex justify-around">
            <li>
                <NavLink  className={({isActive})=>isActive?"font-bold text-indigo-600" : "text-gray-500"}  to={''} >Department</NavLink>
            </li>
            <li>
                <NavLink  className={({isActive})=>isActive?"font-bold text-indigo-600" : "text-gray-500"} to={'student'} >Student</NavLink>

            </li>
            <li>
                <NavLink  className={({isActive})=>isActive?"font-bold text-indigo-600" : "text-gray-500"} to={'subject'} >Subject</NavLink>

            </li>
            
        </ul>
        <Outlet></Outlet>
    </div>)
}