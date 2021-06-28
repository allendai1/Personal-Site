import React, { useState } from 'react'
import ProjectCard from './ProjectCard'
import ProfileMenu from './ProfileMenu'
import Resume from './Resume';
import { useSwipeable } from 'react-swipeable';
/**
 * 
 * @returns JSX.Element 
 */
export default function ProfileContentContainer() {

    const [buttonState, setButtonState] = useState<Array<number>>([1,0]);
    const handlers = useSwipeable({
        onSwipedRight:(eventData)=>{
            setButtonState([1,0])},
            
        onSwipedLeft:(eventData)=>{
            setButtonState([0,1])
        }
    })
    return (
        <div className="profile-content-container" {...handlers}>
            <ProfileMenu buttonState={buttonState} setButtonState={setButtonState} />
            
            {buttonState[0] === 1 && (
                <div><ProjectCard /></div>
                )}
            {buttonState[1] === 1 && (
                <Resume/>
                )}
        </div>
    )
}
