import React,{ useState} from 'react'

function MouseContainer() {
    const [dispaly, setDisplay] = useState(true)
    


    return (
        <div>
            <button onClick={() => setDisplay(!dispaly)}>Toggle Display</button>
            
        </div>
    )
}

export default MouseContainer
