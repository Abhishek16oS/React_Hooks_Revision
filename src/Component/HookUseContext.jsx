import { useContext } from "react";
import { useState } from "react"
import { ThemeContext } from "./smaple";

export default function HookUseContext(){
   const [myTheme,setMyTheme]=useState('Green');
   
   return(<div>
<ThemeContext.Provider value={myTheme}>

<Button setMyTheme={setMyTheme}></Button>
</ThemeContext.Provider>


    </div>)
}




function Button({setMyTheme}){
const theme=useContext(ThemeContext);
return(<>
<button onClick={()=>setMyTheme('Blue')}>Click to change heading to Red</button>
{
    theme ==="Green"?
<h1 style={{backgroundColor:'green'}}>Hello ,Welcome to createContext,useContext and createdContext.Provider</h1>
:
<h1 style={{backgroundColor:'red'}}>Hello ,Welcome to createContext,useContext and createdContext.Provider</h1>

}
    </>)
}