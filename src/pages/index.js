import React from "react"
import ProfileHeaderContainer from "../components/ProfileHeaderContainer"
import ProfileContentContainer from "../components/ProfileContentContainer"
import Navigation from "../components/Navigation"
import Seo from "../components/seo.js"

export default function IndexPage() {
  return (
    <>
    <Seo title="Profile"/>
      <div className="profile-page">
        <div id="profile-column" className="profile-column">
          <ProfileHeaderContainer />
          <ProfileContentContainer />
        </div>
        <div className="navbar-position"><Navigation/></div>
        
        
      </div>
     </>
    
  )
}
