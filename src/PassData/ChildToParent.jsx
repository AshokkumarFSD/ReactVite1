import { useState } from "react"

export default function ParentComp() {

    const [childVal, setchildVal] = useState("");

    function changeInchild(val) {
        setchildVal(val)
    }

    return (
        <>
            <h1>{childVal}</h1>
            <ChildComp parentMtd={changeInchild}></ChildComp>
        </>
    )
}

function ChildComp({ parentMtd }) {
    const [typed, setTyped] = useState("");
    return (
        <>
            <input value={typed}
                onChange={e => setTyped(e.target.value)}
                type="text">
            </input>
            <button onClick={()=>{
parentMtd(typed)

            }}>Print</button>
        </>
    )
}