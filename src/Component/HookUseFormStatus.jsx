import { useState } from "react"
import { useFormStatus } from "react-dom"

export default function HookUseFormStatus() {
    const [data, setData] = useState('');

    async function handleSubmit(formData) {
        await new Promise((res) => setTimeout(res, 2000));
        console.log('form submitted successfully');  
        console.log(formData.get('name'));
    } 

    return(
        <form action={handleSubmit}>
            <SubmitButton data={data} setData={setData} />
        </form>
    )
}

function SubmitButton({ data, setData }) {
    const { pending } = useFormStatus();

    return (
        <>
            <input 
                name="name" 
                type="text" 
                placeholder="Enter name" 
                value={data} 
                onChange={(e) => setData(e.target.value)} 
            />
            <button disabled={pending} type="submit">
                {pending ? 'Submitting...' : "Submit"}
            </button>
            {/* <h2>Name:{data}</h2> */}
        </>
    )
}