/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */



//  const darkMode=localStorage.get("darkMode");
//  if(darkMode!==undefined){
//    root.style.setProperty("theme", darkMode==="true"? "dark" : "");
//  }
//  else if(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches){
//      root.style.setProperty("theme","dark");
//  }
import React from "react"
// You can delete this file if you're not using it
const MagicScriptTag = () => {
  let codeToRunOnClient = `
  (function() {
    const darkMode=localStorage.getItem("darkMode");
    if(darkMode==="true"){
        console.log("Dark mode from local storage");
        document.documentElement.setAttribute("theme", "dark");
    }
    else if(darkMode==="false"){
        console.log("Dark mode false from local storage");
        document.documentElement.setAttribute("theme", "");
    }
    else if(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches){
        document.documentElement.setAttribute("theme", "dark");
        console.log("Windows default is dark mode");
    } 
    
    
    
    
    



  })()
    `
  // eslint-disable-next-line react/no-danger
  return <script dangerouslySetInnerHTML={{ __html: codeToRunOnClient }} />
}
export const onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents(<MagicScriptTag />)
}
