import { useState } from "react";

export default function HookUseState1() {
  
    const[formData,setFormData]=useState({
        name:'',
        age:'',
        city:''
    })
  function handleChange(e){
    
    setFormData((prev)=>({...prev,[e.target.name]:e.target.value}))

  }
    return (
    <div>
        <form action="">

      <input className="text-gray-100 px-2 bg-gray-500" placeholder={'Enter user name'} value={formData.name} onChange={handleChange} type="text" name="name" id="" />
      <br />
      <br />
      <input className="text-gray-100 px-2 bg-gray-500" placeholder={'Enter user city'} value={formData.city} onChange={handleChange} type="text" name="city" id="" />
      <br />
      <br />
      <input className="text-gray-100 px-2 bg-gray-500" placeholder={'Enter user age'} value={formData.age} onChange={handleChange} type="text" name="age" id="" />
      <br />
        </form>
        {
            formData && <>
            <h1>Name:{formData.name}</h1>
            <h1>Age:{formData.age}</h1>
            <h1>City:{formData.city}</h1>
            </>
        }
    </div>
  );
}
