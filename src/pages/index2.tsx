import * as React from "react"
import { Link,navigate } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"
// import NameList from "../components/NameList"
import Seo from "../components/seo.js"

import Resume from "../images/Resume.svg"
import search from "../images/search.svg"
// import Img from "gatsby-image"
import DarkMode from "../components/DarkMode"

export default function IndexPage() {
  
  function test(e: Event): void {
    e.preventDefault()
    document.documentElement.setAttribute("theme", "dark")
  }
  const viewProfile = (e:Event)=>{
    e.preventDefault();
    console.log("Pressed");
    navigate("/resume/");
    

  }
  return (
    <>
      {/* <DarkMode> */}
      <Seo title="index"/>
      <div className="landing-page">
        <div className="landing-header-container">
          <p className="landing-header">
            <span className="landing-sentence1">
              Hi, my name is
              <span className="landing-allen"> Allen.</span>
            </span>
            <span className="landing-sentence2">
              I study
              <span className="landing-computerscience"> Computer Science</span>
            </span>
          </p>
          <button className="university-button">@ UMass Boston</button>
          <Link to="/profile">
          <button className="view_profile-button">
            <img src={search} alt="search_svg" />
            <span>View profile</span>
          </button>
          </Link>
          
        </div>
        
        
        <div className="resume-document" onClick={viewProfile}>
          <span>View Resume</span>
          

        </div>
        
        
      </div>
      {/* </DarkMode> */}
    </>
  )
}
