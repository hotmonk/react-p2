import React from 'react';


const ValidationComponent=(props)=>{
    return(
        <div>
            {
                props.inputLength<5?
                <p>Text too short</p>:

                props.inputLength>10?
                <p>Text too long</p>:

                props.inputLength>4&&props.inputLength<11?
                <p>Text long enough</p>:null

                
            }
        </div>
    )
}

export default ValidationComponent;