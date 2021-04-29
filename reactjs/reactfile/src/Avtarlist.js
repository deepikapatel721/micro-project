import React from 'react';

const Avtarlist=(props)=>
{
    return (
    
                <div className="avtar ma4 bg-light-purple dib pa4 tc grow">
                        <img src={`https://joeschmoe.io/api/v1/${props.name}`} alt="Avtar" />
                        <h1 classNmae=""> {props.name} </h1>
                        <p> {props.work} </p>
                </div>

           )
    
}

export default Avtarlist;