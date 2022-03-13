import { useState } from "react";
import { Button } from "../button/Button";
import './LessDescription.css';


export const LessDescription = ({gameDescription, max=15}) => {

    const [showLess, setShowLess] = useState(true); 

    if(gameDescription.length <= max) {
        return <span>{gameDescription}</span>;
    }

    return (
        <span>
            {showLess ? `${gameDescription.substring(0, max)} ...` : `${gameDescription}...`}
            <a className="moreLess" href='#' onClick={(event)=>{
                event.preventDefault();
                setShowLess(!showLess);
            }}>{showLess ? <Button className='btn'>More</Button> : <Button>less</Button>}
            </a>
        </span> 
    )
}

