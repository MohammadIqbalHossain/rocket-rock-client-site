import React, { useEffect, useState } from 'react';
import DisplayParts from './DisplayParts';

const Parts = () => {

    const [parts, setParts] = useState([]);
    console.log(parts);

    useEffect(() => {
        fetch("https://rocket-rock-server-site-production.up.railway.app/parts")
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