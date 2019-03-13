import React from 'react';

const validationComponent = (props) => {

let validation = "Text long enough!";
if(props.textLength < 5)
    validation = "Text too short!"

   return(
        <p>{validation}</p>
   )
}

export default validationComponent;