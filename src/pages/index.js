import * as React from "react"
import { useEffect } from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import NameList from "../components/NameList"
import Seo from "../components/seo"
import Resume from "../images/Resume.svg"
import search from "../images/search.svg"
import Img from "gatsby-image"







export default function IndexPage(){

  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.setAttribute("theme", "dark");
    }
    return () => {
      
    }
  }, [])
  function test(e){
    e.preventDefault();
    document.documentElement.setAttribute("theme", "dark");
  }
  return(
    
      <div className="landing-page">
        <span className="landing-header-1">Hi, my name is</span>
        <span className="landing-header-2">Allen</span>
        <span className="landing-header-1">I study</span>
        <span className="landing-header-4">Computer Science</span>

        <button className="university-button">@ UMass Boston</button>

        <Link to="/resume">
        <img src={Resume} alt="resume_svg"/>
        </Link>
        <Link to="/profile">
        <button className="view_profile-button" >
          <img src={search} alt="search_svg"/>
          <span>View Profile</span>
        </button>
        </Link>
        
      
      </div>
    )
}

