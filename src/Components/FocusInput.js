import React, {useEffect, useRef} from 'react'

function FocusInput() {

    const inputRef = useRef(null)

    useEffect(() => {
        //Focus the input 
        inputRef.current.focus()
    },[])
    return (
        <div>
            <input ref={inputRef} type="text"/>
        </div>
    )
}

export default FocusInput
