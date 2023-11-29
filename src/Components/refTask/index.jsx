import React, { useRef, useState } from 'react'

const RefTask = () => {
    const [inpIndex, setinpIndex] = useState(0)
    const myInp = useRef();
    const myInp1 = useRef();
    const myInp2 = useRef();
    function handlclick() {
        switch (inpIndex) {
            case 0:
                myInp.current.focus()
                break;
            case 1:
                myInp1.current.focus()
                break;
            case 2:
                myInp2.current.focus()
                break;

            default:
                break;
        }
        if (inpIndex === 2) {
            setinpIndex(0)
            return
        }
        setinpIndex(inpIndex + 1)

    }
    return (
        <div>
            <button onClick={handlclick}>click</button>
            <br />
            <br />
            <br />
            <input ref={myInp} type="text" name="name" id="name" />
            <br />
            <br />
            <br />
            <input ref={myInp1} type="text" name="name" id="name" />
            <br />
            <br />
            <br />
            <input ref={myInp2} type="text" name="name" id="name" />

        </div>
    )
}

export default RefTask