import { useReducer } from "react";

export default function HookUseReducer() {
  let userData = {
    name: "",
    age: "",
    skill: "",
    email: "",
    city: "",
  };

  function reducer(state, formData) {
   


    return ({...state,[formData.type]:formData.val})


  }

  const [state, dispatch] = useReducer(reducer, userData);

async function handleForm(e) {
    e.preventDefault();

    
    await new Promise((res) => setTimeout(res, 200));

    
    console.log("Form submitted:", state);
  }


  return (
    <div>
      <form onSubmit={handleForm}>
        <input
          value={state.name}
          onChange={(e) => dispatch({ val: e.target.value, type: "name" })}
          type="text"
          name="name"
          placeholder="Enter user Name"
        />
        <br />
       
        <br />
        <input
          value={state.age}
          onChange={(e) => dispatch({ val: e.target.value, type: "age" })}
          type="text"
          name="age"
          placeholder="Enter user Age"
        />
        <br />
        <br />
        <input
          value={state.skill}
          onChange={(e) => dispatch({ val: e.target.value, type: "skill" })}
          type="text"
          name="skill"
          placeholder="Enter user Skill"
        />
        <br />
        <br />
        <input
          value={state.email}
          onChange={(e) => dispatch({ val: e.target.value, type: "email" })}
          type="text"
          name="email"
          placeholder="Enter user Email"
        />
        <br />
        <br />
        <input
          value={state.city}
          onChange={(e) => dispatch({ val: e.target.value, type: "city" })}
          type="text"
          name="city"
          placeholder="Enter user City"
        />
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>

      {
        state &&  <div>
            <p>{state.name}</p>
            <p>{state.age}</p>
            <p>{state.skill}</p>
            <p>{state.skill}</p>
            <p>{state.email}</p>
        </div>
        
            }
    </div>
  );
}




/* ////////////////////////////////////////////// */

