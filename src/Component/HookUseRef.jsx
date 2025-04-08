import { useRef } from "react"


export default function HookUseRef(){

  //useRef

  const focusOnInput=useRef(null);

  function handleFocusInput(e){
    e.preventDefault();
    focusOnInput.current.focus();
    focusOnInput.current.value='Hello Abhi';
    focusOnInput.current.style.color='red';
  }

  return(<>

    <form >
    <input ref={focusOnInput} className="bg-gray-400" type="text" placeholder="Enter your name" name="name" id="id" />
    <button className="bg-amber-200 rounded-xl mx-2 " onClick={handleFocusInput} >Click to Focus</button>
    </form>


  </>)

}
