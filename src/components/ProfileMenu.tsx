import React, {useState,useRef} from 'react'



type Props = {
    buttonState: Array<number>,
    setButtonState: React.Dispatch<React.SetStateAction<number[]>>

}

export default function ProfileMenu({setButtonState,buttonState}:Props):JSX.Element {

    function handleButtonPress(id: string): void{
        switch (id) {
            case "personal":
                setButtonState([1, 0, 0]);
                break;
            case "projects":
                setButtonState([1,0]);
                break;
            case "resume":
                setButtonState([0,1]);
                break;
        }
    }

   
    return (
        
            <div className="profile-menu">
                <button id="projects"  className="menu-button"  onClick={(e)=>handleButtonPress((e.target as Element).id)} data-pressed={buttonState[0]}>Projects</button>
                <button id="resume" className="menu-button"  onClick={(e)=>handleButtonPress((e.target as Element).id)} data-pressed={buttonState[1]}>Resume</button>
            </div>
        
    )
}
