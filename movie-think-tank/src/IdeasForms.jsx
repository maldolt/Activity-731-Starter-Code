import { useState } from "react";

export default function IdeasForm ({ onAddIdea}){
    let [inputVal, setInputVal] = useState('');
 
    const onSubmit = e => {
        e.preventDefault();
        onAddIdea(inputVal);
        e.target.reset()
    }
    return <div>
        <form onSubmit={onSubmit}>
            <input 
            type="text"
            onChange={e => setInputVal(e.target.value)}/>
            <button>Submit your last name</button>
        </form>
    </div>
}