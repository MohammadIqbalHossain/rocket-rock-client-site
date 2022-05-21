import React, { useEffect, useState } from 'react';
import DisplayParts from './DisplayParts';

const Parts = () => {
    
    const [parts, setParts] = useState([]);

    useEffect(() => {
        fetch("Parts.json")
        .then(res => res.json())
        .then(data => setParts(data))
    }, [])

    return (
       <div>
           {
               parts.map(part => <DisplayParts
               key={part.index}
               part={part}
               ></DisplayParts>)
           }
       </div>
    );
};

export default Parts;