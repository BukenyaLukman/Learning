import React , {useState} from 'react'

function counter() {
    const [counterOne, setCounterOne] = useState(0)
    const [counterTow, setCounterTwo] = useState(0)

    const incrementOne = () => {
        setCounterOne(counterOne + 1)
    }
    const incrementTwo = () =>{
        setCounterTwo(counterTow +1)
    }
    return (
        <div>
            <div>
                <button onClick={incrementOne}>Counter one - {counterOne}</button>
            </div>
            <div>
    <button onClick={incrementTwo}>Count Two - {counterTow}</button>
            </div>
        </div>
    )
}

export default counter
