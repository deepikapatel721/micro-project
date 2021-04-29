import React from 'react';
import './Avtar.css';
import Avtarlist from './Avtarlist';
import 'tachyons';

const Avtar=(props)=>
{
    return (

                <div>
                    <h1>Welcome To Avtar</h1>
                    <Avtarlist id="1" name="Ram" work="Developer"/>
                    <Avtarlist id="1" name="Lakhan" work="Tester"/>
                    <Avtarlist id="1" name="Rohan" work="Manager"/>
                    <Avtarlist id="1" name="Kedar" work="Admin"/>
                    <button>Subscribed</button>
                </div>
           )
    
}

export default Avtar;