import { useState } from "react";
import { useActionState } from "react";


export default function HookUseActionState(){
    
  function handleForm(state,formData){

    const userName=formData.get('name');
    const age=formData.get('age');
    const skill=formData.get('skill');
   
    return({...state,userName,age,skill});

  }  


  const [data,formAction,pending]=useActionState(handleForm,undefined);
    

    
    
    return(<div>
      

      <form action={formAction}  >

      <input  placeholder="Enter user name " type="text" name="name"  />
      <br />
      <br />
      <input placeholder="Enter user age " type="text" name="age"  />
      <br />
      <br />
      <input  placeholder="Enter user skill " type="text" name="skill"  />
      <br />
      <br />
      <button disabled={pending} type="submit"> {pending?'Submitting':'Submit'} </button>
      <br />
      <br />

      </form>


      {
        data && <ul>
          <li>{data.userName}</li>
          <li>{data.skill}</li>
          <li>{data.age}</li>
        </ul>
      }

    </div>)
  }