import React, { useEffect, useState } from 'react';
import DisplayParts from './DisplayParts';

const Parts = () => {

    const [parts, setParts] = useState([]);
    console.log(parts);

    useEffect(() => {
        fetch("https://nameless-reaches-54875.herokuapp.com/parts")
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